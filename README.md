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
```


## Related

* [VE.Direct Whitepaper](https://www.victronenergy.com/upload/documents/Whitepaper-Data-communication-with-Victron-Energy-products_EN.pdf)
* [VE.Direct Protocol FAQ](https://www.victronenergy.com/live/vedirect_protocol:faq)
