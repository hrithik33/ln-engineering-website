const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/images/map/world-map.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

// Find the opening <g> and closing </g>
const gStart = svg.indexOf('<g>');
const gEnd = svg.lastIndexOf('</g>');

if (gStart === -1 || gEnd === -1) {
  console.error('Could not find <g> tags');
  process.exit(1);
}

let inner = svg.substring(gStart + 3, gEnd).trim();

// Replace class=" with className="
inner = inner.replace(/class="/g, 'className="');

// Let's create an optimized React component that allows dynamic country styling
// We can wrap individual paths or style them via CSS id selector
const outputCode = `import React from "react";

export function WorldPaths({ highlightedCountry }: { highlightedCountry?: string | null }) {
  return (
    <g id="countries-group">
      ${inner}
    </g>
  );
}
`;

const targetPath = path.join(__dirname, '../src/components/sections/WorldPaths.tsx');
fs.writeFileSync(targetPath, outputCode, 'utf8');
console.log('Successfully generated WorldPaths.tsx at', targetPath);
