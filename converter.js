const colors = require('./colors');

// hex to [r,g,b]
function hexToRgb(h) {
  h = h.replace('#', '');
  let bi = parseInt(h, 16);
  return [
    (bi >> 16) & 255,
    (bi >> 8) & 255,
    bi & 255
  ];
}

// rgb nums to hex
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// name/hex to rgb
function colorToRgb(input) {
  let lc = input.toLowerCase();
  if (colors[lc]) return hexToRgb(colors[lc]);
  if (/^#?[0-9A-F]{6}$/i.test(input)) return hexToRgb(input);
  throw new Error('Invalid color format');
}

// name/rgb to hex
function colorToHex(input) {
  let lc = input.toLowerCase();
  if (colors[lc]) return colors[lc].toUpperCase();
  
  let parts = input.split(',').map(p => p.trim());
  if (parts.length === 3) {
    let [r, g, b] = parts.map(Number);
    if ([r, g, b].every(v => !isNaN(v) && v >= 0 && v <= 255)) {
      return rgbToHex(r, g, b);
    }
  }
  throw new Error('Invalid RGB format');
}

module.exports = { colorToRgb, colorToHex };