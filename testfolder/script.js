const { encrypt, decrypt, encryptObject, decryptObject } = require("easy-api-encryptor");

const dataObject = {
    "userid": "Nayak",
    "videourl": "https://example.com/dummyvideonew"
}

const dataString = "HelloWorld!";

console.log(encrypt(dataString))
console.log(decrypt(encrypt(dataString)))
console.log(encryptObject(dataObject))
console.log(decryptObject(encryptObject(dataObject)))