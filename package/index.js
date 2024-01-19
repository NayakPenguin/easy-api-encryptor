const { encryption, decryption } = require('./public_algorithms/js_converted/algo1');

function encrypt(string){
    const encryptedString = encryption(`${string}`);
    return encryptedString;
}

function decrypt(string){
    const decryptedString = decryption(`${string}`);
    return decryptedString;
}

function encryptObject(inputObject) {
    const encryptedObject = {};
    
    for (const key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            const encryptedKey = encrypt(key);

            if (typeof inputObject[key] === 'object' && inputObject[key] !== null) {
                encryptedObject[encryptedKey] = encryptObject(inputObject[key]);
            } else {
                encryptedObject[encryptedKey] = encrypt(`${inputObject[key]}`);
            }
        }
    }

    return encryptedObject;
}

function decryptObject(inputObject) {
    const decryptedObject = {};

    for (const key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            const decryptedKey = decrypt(key);

            if (typeof inputObject[key] === 'object' && inputObject[key] !== null) {
                decryptedObject[decryptedKey] = decryptObject(inputObject[key]);
            } else {
                decryptedObject[decryptedKey] = decrypt(`${inputObject[key]}`);
            }
        }
    }

    return decryptedObject;
}

module.exports = {encrypt, decrypt, encryptObject, decryptObject};