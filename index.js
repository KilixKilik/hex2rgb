const { colorToRgb, colorToHex } = require('./converter');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Mode (hex2rgb/rgb2hex/color2rgb/color2hex): ', (mode) => {
  rl.question('Value: ', (value) => {
    try {
      let res;
      mode = mode.trim().toLowerCase();
      if (mode === 'hex2rgb' || mode === 'color2rgb') {
        res = colorToRgb(value);
        console.log(`RGB: ${res.join(', ')}`);
      } else if (mode === 'rgb2hex' || mode === 'color2hex') {
        res = colorToHex(value);
        console.log(`HEX: ${res}`);
      } else {
        console.log('Invalid mode. Use hex2rgb, rgb2hex, color2rgb or color2hex.');
      }
    } catch (e) {
      console.error('Error:', e.message);
    }
    rl.close();
  });
});