const { encryption, decryption } = require('./public_algorithms/js_converted/algo1');

function encrypt(string){
    const encryptedString = encryption(string);
    return encryptedString;
}

function decrypt(string){
    const decryptedString = decryption(string);
    return decryptedString;
}

module.exports = {encrypt, decrypt};