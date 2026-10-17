import os
import re
from PIL import Image
import numpy as np

# 1. Find all image references in code
image_refs = set()
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as fh:
                matches = re.findall(r'[\'"](/images/[^\'"]+)[\'"]', fh.read())
                image_refs.update(matches)

print(f'Total unique image paths referenced in code: {len(image_refs)}')
missing = []
for ref in image_refs:
    local_path = os.path.join('public', ref.lstrip('/'))
    if not os.path.exists(local_path):
        missing.append(ref)

if missing:
    print('WARNING: Missing images:', missing)
else:
    print('ALL image references exist on disk!')

# 2. Check for yellow/orange pixels in all referenced machine images
print('\nVerifying machine images for red color transformation:')
machine_images = [r for r in image_refs if 'machine' in r or 'hero' in r]
for r in sorted(machine_images):
    local_path = os.path.join('public', r.lstrip('/'))
    if os.path.exists(local_path) and local_path.lower().endswith(('.jpg', '.webp', '.png')):
        try:
            arr = np.array(Image.open(local_path).convert('RGB'))
            yo_mask = (arr[:,:,0] > 140) & (arr[:,:,1] > 70) & (arr[:,:,2] < 90) & (arr[:,:,0] > arr[:,:,1]*1.1)
            yo_pct = np.mean(yo_mask) * 100
            red_mask = (arr[:,:,0] > 120) & (arr[:,:,0] > arr[:,:,1]*1.5) & (arr[:,:,0] > arr[:,:,2]*1.5)
            red_pct = np.mean(red_mask) * 100
            print(f'  {r}: Red = {red_pct:.1f}%, Yellow/Orange = {yo_pct:.2f}%')
        except Exception as e:
            print(f'  {r}: error {e}')
