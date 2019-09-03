const fs = require('fs');

const spongeGar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImgResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeGar);
  response.end();
};

module.exports.spongeGar = spongeGar;
module.exports.getImgResponse = getImgResponse;
