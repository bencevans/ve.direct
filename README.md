# @bencevans/ve.direct

> Victron VE.Direct Parser

- Read and parses Victron VE.Direct (Text Mode).
- Checks data integrity by protocol's checksum.

```
npm install @bencevans/ve.direct
```

## Usage

```js
const VEDirect = require('@bencevans/ve.direct');

(new VEDirect('/dev/...')).on('data', console.log);
// ...
// {
//   PID: 41055,
//   FW: 150,
//   'SER#': 'xxxxxxxxxxx',
//   V: 12790,
//   I: 800,
//   VPV: 38870,
//   PPV: 13,
//   CS: 3,
//   MPPT: 2,
//   OR: 0,
//   ERR: 0,
//   LOAD: 'ON',
//   IL: 200,
//   H19: 417,
//   H20: 25,
//   H21: 183,
//   H22: 38,
//   H23: 168,
//   HSDS: 8
// }
// ...
```


## Related

* [VE.Direct Whitepaper](https://www.victronenergy.com/upload/documents/Whitepaper-Data-communication-with-Victron-Energy-products_EN.pdf)
* [VE.Direct Protocol FAQ](https://www.victronenergy.com/live/vedirect_protocol:faq)
