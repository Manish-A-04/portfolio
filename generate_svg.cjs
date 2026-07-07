const fs = require('fs');
const b64 = fs.readFileSync('./public/logo.jpeg').toString('base64');
const svg = `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="feather" cx="50%" cy="50%" r="50%">
      <stop offset="60%" stop-color="white" stop-opacity="1" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </radialGradient>
    <mask id="mask">
      <circle cx="128" cy="128" r="128" fill="url(#feather)" />
    </mask>
  </defs>
  <image href="data:image/jpeg;base64,${b64}" width="256" height="256" mask="url(#mask)" preserveAspectRatio="xMidYMid slice" />
</svg>`;
fs.writeFileSync('./public/favicon.svg', svg);
