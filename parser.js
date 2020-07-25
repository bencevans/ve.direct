const { Transform } = require("stream");

const checksum = (blockBuffer) => {
  return blockBuffer.reduce((prev, curr) => {
      return (prev + curr) & 255
  }, 0)
};

class VEDirectParser extends Transform {
  constructor() {
    super({
      readableObjectMode: true,
    });

    this.buf = Buffer.alloc(0)
    this.blk = {};
  }

  _transform(chunk, encoding, cb) {
    const [key, val] = chunk.toString().split("\t");

    if (key[0] === ':') {
        return cb()
    }

    this.buf = Buffer.concat([this.buf, Buffer.from([0x0d, 0x0a]), chunk]);

    if (key === "Checksum") {
      if (checksum(this.buf) === 0) {
        this.push(this.blk);
      }

      this.buf = Buffer.alloc(0)
      this.blk = {};
    } else {
      this.blk[key] = val;
    }

    cb();
  }
}

module.exports = VEDirectParser;
module.exports.checksum = checksum;
