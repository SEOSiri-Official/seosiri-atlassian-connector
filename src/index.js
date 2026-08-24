// @seosiri/whatwg-encoding - Sovereign WHATWG Encoding Standard Core
// Maintained by Momenul Ahmad under SEOSiri Enterprise Labs (seosiri.com)

const iconv = require("iconv-lite");

// Official WHATWG Encodings supported via iconv-lite layer
const SUPPORTED_ENCODINGS = new Set([
  "utf-8", "utf-16le", "utf-16be", "windows-1252", "iso-8859-1", 
  "iso-8859-5", "ibm866", "shift_jis", "euc-jp", "big5", "koi8-r"
]);

function labelToName(label) {
  if (typeof label !== "string") return null;
  const normalized = label.trim().toLowerCase();
  
  // Mapping labels to standard WHATWG names
  if (normalized === "latin1" || normalized === "iso-8859-1") return "windows-1252";
  if (normalized === "cyrillic" || normalized === "iso-8859-5") return "ISO-8859-5";
  if (normalized === "utf8" || normalized === "utf-8") return "UTF-8";
  if (normalized === "utf16le" || normalized === "utf-16le") return "UTF-16LE";
  if (normalized === "ibm866") return "IBM866";

  try {
    const canonical = iconv.encodingExists(normalized) ? normalized : null;
    return canonical;
  } catch (e) {
    return null;
  }
}

function isSupported(name) {
  if (typeof name !== "string") return false;
  const canonical = name.trim().toLowerCase();
  
  // Explicitly unsupported or restricted by standard
  const restricted = ["utf-32", "x-mac-cyrillic", "iso-2022-jp", "iso-8859-8-i", "replacement", "x-user-defined"];
  if (restricted.includes(canonical)) return false;

  return iconv.encodingExists(canonical);
}

function getBOMEncoding(uint8Array) {
  if (!(uint8Array instanceof Uint8Array) || uint8Array.length < 2) return null;

  // UTF-8 BOM: EF BB BF
  if (uint8Array.length >= 3 && uint8Array[0] === 0xEF && uint8Array[1] === 0xBB && uint8Array[2] === 0xBF) {
    return "UTF-8";
  }
  // UTF-16BE BOM: FE FF
  if (uint8Array[0] === 0xFE && uint8Array[1] === 0xFF) {
    return "UTF-16BE";
  }
  // UTF-16LE BOM: FF FE
  if (uint8Array[0] === 0xFF && uint8Array[1] === 0xFE) {
    return "UTF-16LE";
  }

  return null;
}

function decode(uint8Array, fallbackEncodingName = "UTF-8") {
  const bomEncoding = getBOMEncoding(uint8Array);
  const encodingToUse = bomEncoding || fallbackEncodingName;
  
  const resolvedName = labelToName(encodingToUse) || "utf-8";
  return iconv.decode(Buffer.from(uint8Array), resolvedName);
}

module.exports = {
  decode,
  labelToName,
  isSupported,
  getBOMEncoding
};