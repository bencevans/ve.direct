const SerialPort = require("serialport");
const VEDirectParser = require("./parser");
const { EventEmitter } = require("events");

class VEDirect extends EventEmitter {
  constructor(path) {
    super();

    this.serial = new SerialPort(path, (err) => {
      if (err) {
        this.emit("error", err);
      }
    });

    this.rl = new SerialPort.parsers.Delimiter({
      delimiter: Buffer.from([0x0d, 0x0a], 'hex'),
      includeDelimiter: false
    });

    this.ve = new VEDirectParser();

    this.ve.on("data", (data) => {
      this.emit("data", data);
    });

    this.serial.pipe(this.rl).pipe(this.ve);
  }
}

module.exports = VEDirect;
