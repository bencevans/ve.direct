const VEDirect = require('.');

(new VEDirect('/dev/ttyUSB0')).on('data', console.log);
