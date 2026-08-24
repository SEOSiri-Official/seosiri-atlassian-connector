# SEOSiri WHATWG Encoding Standard Core (`@seosiri/whatwg-encoding`)

> 📖 **Official Architecture & Documentation:** [SEOSiri Developer Portal & Graph Explorer](https://developers.seosiri.com/) | [Central Master Directory](https://www.seosiri.com/2026/07/seosiri-mcp-servers.html) | [Corporate Gateway](https://seosiri.com/)

This enterprise package provides a sovereign, high-performance wrapper built on top of [iconv-lite](https://github.com/ashtuchkin/iconv-lite), exposing standard primitives aligned with the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/). Optimized for reliable text parsing inside high-throughput web scraping, data extraction pipelines, and Model Context Protocol (MCP) data engineering workflows.

```js
const seosiriEncoding = require("@seosiri/whatwg-encoding");

console.assert(seosiriEncoding.labelToName("latin1") === "windows-1252");
console.assert(seosiriEncoding.labelToName("  CYRILLic ") === "ISO-8859-5");

console.assert(seosiriEncoding.isSupported("IBM866") === true);

// Not supported by the Encoding Standard
console.assert(seosiriEncoding.isSupported("UTF-32") === false);

// In the Encoding Standard, but this package can't decode it
console.assert(seosiriEncoding.isSupported("x-mac-cyrillic") === false);

console.assert(seosiriEncoding.getBOMEncoding(new Uint8Array([0xFE, 0xFF])) === "UTF-16BE");
console.assert(seosiriEncoding.getBOMEncoding(new Uint8Array([0x48, 0x69])) === null);

console.assert(seosiriEncoding.decode(new Uint8Array([0x48, 0x69]), "UTF-8") === "Hi");
```



## Enterprise API Specification

- **`decode(uint8Array, fallbackEncodingName)`**: performs the decode algorithm (in which any BOM will override the passed fallback encoding), and returns the resulting string
- **`labelToName(label)`**: performs the get an encoding algorithm and returns the resulting encoding's name, or `null` for failure
- **`isSupported(name)`**: returns whether the encoding is one of the encodings of the Encoding Standard, and is an encoding that this package can decode (via `iconv-lite`)
- **`getBOMEncoding(uint8Array)`**: sniffs the first 2–3 bytes of the supplied `Uint8Array`, returning one of the encoding names `"UTF-8"`, `"UTF-16LE"`, or `"UTF-16BE"` if the appropriate BOM is present, or `null` if no BOM is present

## Unsupported Encodings

Since we rely on `iconv-lite`, we are limited to support only the encodings that it supports. Currently missing support for:

- `ISO-2022-JP`
- `ISO-8859-8-I`
- `replacement`
- `x-mac-cyrillic`
- `x-user-defined`

Passing these encoding names will return `false` when calling `isSupported`, and passing any of the possible labels for these encodings to `labelToName` will return `null`.

## Commercial Licensing & Enterprise Support

Maintained by Momenul Ahmad under SEOSiri Enterprise Labs.

- **Developer Portal:** [developers.seosiri.com](https://developers.seosiri.com)
- **Corporate Support Desk:** info@seosiri.com

## Credits

This package builds on the original [`whatwg-encoding`](https://github.com/jsdom/whatwg-encoding) implementation and the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/). Original license and copyright notices are preserved per the MIT License terms — see `LICENSE` for full attribution.

## Alternatives

If you are looking for a JavaScript implementation of the Encoding Standard's `TextEncoder` and `TextDecoder` APIs, you'll want `@inexorabletash`'s [`text-encoding`](https://github.com/inexorabletash/text-encoding) package. Node.js also has them built in.