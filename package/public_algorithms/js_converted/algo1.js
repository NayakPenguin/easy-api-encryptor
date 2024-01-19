function decryption(encrypted_string) {
    let n = encrypted_string.length;
    let decrypted_string = "";

    for (let i = 0; i < n; i++) {
        let ch = encrypted_string[i];

        // Check if the character is an uppercase letter
        if (ch.match(/[A-Z]/)) {
            ch = String.fromCharCode(((ch.charCodeAt(0) - 'A'.charCodeAt(0) - 15 + 26) % 26) + 'A'.charCodeAt(0));
        }
        // Check if the character is a lowercase letter
        else if (ch.match(/[a-z]/)) {
            ch = String.fromCharCode(((ch.charCodeAt(0) - 'a'.charCodeAt(0) - 15 + 26) % 26) + 'a'.charCodeAt(0));
        }

        decrypted_string += ch;
    }

    return decrypted_string;
}

function encryption(input_string) {
    let n = input_string.length;
    let encrypted_string = "";

    for (let i = 0; i < n; i++) {
        let ch = input_string[i];

        // Check if the character is an uppercase letter
        if (ch.match(/[A-Z]/)) {
            ch = String.fromCharCode(((ch.charCodeAt(0) - 'A'.charCodeAt(0) + 15) % 26) + 'A'.charCodeAt(0));
        }
        // Check if the character is a lowercase letter
        else if (ch.match(/[a-z]/)) {
            ch = String.fromCharCode(((ch.charCodeAt(0) - 'a'.charCodeAt(0) + 15) % 26) + 'a'.charCodeAt(0));
        }

        encrypted_string += ch;
    }

    return encrypted_string;
}

module.exports = { encryption, decryption };