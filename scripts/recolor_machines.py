"""
LN Engineering — Machine Image Colour Transformation Script
Transforms legacy yellow/orange machinery painted housings to the approved
LN Engineering deep industrial red (#B52D32 / #B43132) while strictly preserving:
- Stainless steel guide rails, chrome rollers, and metallic flywheels
- Dark structural steel and frame cast components
- Granite blocks, marble stone textures, and factory surroundings
"""

import os
import shutil
from PIL import Image
import numpy as np

def rgb_to_hsv(arr):
    r, g, b = arr[:,:,0]/255.0, arr[:,:,1]/255.0, arr[:,:,2]/255.0
    cmax = np.maximum(np.maximum(r, g), b)
    cmin = np.minimum(np.minimum(r, g), b)
    diff = cmax - cmin
    
    h = np.zeros_like(cmax)
    mask_r = (cmax == r) & (diff != 0)
    h[mask_r] = ((g[mask_r] - b[mask_r]) / diff[mask_r]) % 6 * 60
    mask_g = (cmax == g) & (diff != 0)
    h[mask_g] = (((b[mask_g] - r[mask_g]) / diff[mask_g]) + 2) * 60
    mask_b = (cmax == b) & (diff != 0)
    h[mask_b] = (((r[mask_b] - g[mask_b]) / diff[mask_b]) + 4) * 60
    
    s = np.zeros_like(cmax)
    s[cmax != 0] = diff[cmax != 0] / cmax[cmax != 0]
    v = cmax
    return h, s, v

def hsv_to_rgb(h, s, v):
    c = v * s
    x = c * (1 - np.abs((h / 60.0) % 2 - 1))
    m = v - c
    
    r = np.zeros_like(h)
    g = np.zeros_like(h)
    b = np.zeros_like(h)
    
    m0 = (h >= 0) & (h < 60)
    r[m0], g[m0], b[m0] = c[m0], x[m0], 0
    m1 = (h >= 60) & (h < 120)
    r[m1], g[m1], b[m1] = x[m1], c[m1], 0
    m2 = (h >= 120) & (h < 180)
    r[m2], g[m2], b[m2] = 0, c[m2], x[m2]
    m3 = (h >= 180) & (h < 240)
    r[m3], g[m3], b[m3] = 0, x[m3], c[m3]
    m4 = (h >= 240) & (h < 300)
    r[m4], g[m4], b[m4] = x[m4], 0, c[m4]
    m5 = (h >= 300) & (h < 360)
    r[m5], g[m5], b[m5] = c[m5], 0, x[m5]
    
    rgb = np.stack([(r + m) * 255.0, (g + m) * 255.0, (b + m) * 255.0], axis=-1)
    return np.clip(rgb, 0, 255).astype(np.uint8)

def smoothstep(edge0, edge1, x):
    t = np.clip((x - edge0) / (edge1 - edge0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)

def transform_image(path):
    if not os.path.exists(path):
        return None
    
    im = Image.open(path).convert('RGB')
    arr = np.array(im, dtype=np.float32)
    h, s, v = rgb_to_hsv(arr)
    
    # Calculate mask for yellow/orange painted housings
    # Typical painted surfaces: 15° <= H <= 55°, Saturation >= 0.28, Value >= 0.20
    w_h_low = smoothstep(14.0, 20.0, h)
    w_h_high = 1.0 - smoothstep(48.0, 56.0, h)
    w_sat = smoothstep(0.25, 0.40, s)
    w_val = smoothstep(0.18, 0.28, v)
    
    weight = w_h_low * w_h_high * w_sat * w_val
    paint_pct = np.mean(weight > 0.5) * 100
    
    if paint_pct < 0.1:
        # Not a painted yellow/orange image
        return (path, 0.0, 0.0)
    
    # Target industrial red (#B52D32)
    # Hue is approximately 358° (or -2°)
    h_effective = np.where(h > 180, h - 360, h)
    new_h_effective = (1.0 - weight) * h_effective + weight * (-2.0)
    new_h = np.where(new_h_effective < 0, new_h_effective + 360.0, new_h_effective) % 360.0
    
    # Rich industrial red powder-coated steel finish
    new_s = (1.0 - weight) * s + weight * np.clip(s * 0.95, 0.70, 0.92)
    new_v = (1.0 - weight) * v + weight * (v * 0.88)
    
    out_rgb = hsv_to_rgb(new_h, new_s, new_v)
    out_img = Image.fromarray(out_rgb)
    
    # Save back preserving format and high quality
    ext = os.path.splitext(path)[1].lower()
    if ext in ('.jpg', '.jpeg'):
        out_img.save(path, 'JPEG', quality=95, optimize=True)
    elif ext == '.webp':
        out_img.save(path, 'WEBP', quality=92, method=6)
    elif ext == '.png':
        out_img.save(path, 'PNG', optimize=True)
        
    return (path, paint_pct, np.mean(weight > 0.01) * 100)

def main():
    target_dirs = [
        'public/images/machines',
        'public/images/brand'
    ]
    
    processed = []
    for tdir in target_dirs:
        for root, dirs, files in os.walk(tdir):
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in ('.jpg', '.jpeg', '.webp', '.png'):
                    # Skip logo and svg
                    if 'logo' in f.lower() or f.endswith('.svg'):
                        continue
                    full_p = os.path.join(root, f)
                    res = transform_image(full_p)
                    if res and res[1] > 0.1:
                        processed.append(res)
                        print(f"Recolored: {res[0]} (Paint area: {res[1]:.2f}%)")
                        
    print(f"\nTotal machine images successfully transformed to LN Industrial Red: {len(processed)}")

if __name__ == '__main__':
    main()
