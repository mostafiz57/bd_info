var path = require('path');

module.exports = {
  port: 8080,
  staticUrl: '/static',
  distFolder: path.resolve(__dirname+'/../../client/dist')
};
