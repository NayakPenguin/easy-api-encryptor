const { encrypt, decrypt } = require("easy-api-encryptor");

console.log(encrypt("WDS"))
console.log(decrypt(encrypt("WDS")))