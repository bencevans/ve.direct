const { SerialPort } = require("serialport");
const VEDirectParser = require("./parser");
const { DelimiterParser } = require("@serialport/parser-delimiter");
const { EventEmitter } = require("events");

class VEDirect extends EventEmitter {
  constructor(path) {
    super();

    this.serial = new SerialPort({
      path,
      baudRate: 19200,
      dataBits: 8,
      parity: "none",
    });

    this.rl = new DelimiterParser({
      delimiter: Buffer.from([0x0d, 0x0a], "hex"),
      includeDelimiter: false,
    });

    this.ve = new VEDirectParser();

    this.ve.on("data", (data) => {
      this.emit("data", data);
    });

    this.serial.pipe(this.rl).pipe(this.ve);
  }
}

/**
 * List available VE.Direct devices.
 */
async function list() {
  const devices = await SerialPort.list();

  return devices.filter((device) => {
    return device.vendorId === "0403" && device.productId === "6015";
  });
}

module.exports = VEDirect;
module.exports.VEDirect = VEDirect;
module.exports.list = list;
