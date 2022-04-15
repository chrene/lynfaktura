
const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   },
   env: {
    dxEnabled: process.env.DX_ENABLED
  },
}); 