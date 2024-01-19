#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <cmath>

using namespace std;

string decryption(string encrypted_string) {
    int n = encrypted_string.length();
    string decrypted_string = "";
    for (int i = 0; i < n; i++) {
        char ch = encrypted_string[i];

        // Check if the character is an uppercase letter
        if (isupper(ch)) {
            ch = 'A' + (ch - 'A' - 15 + 26) % 26;  // Subtract 15 cyclically from uppercase characters
        }
        // Check if the character is a lowercase letter
        else if (islower(ch)) {
            ch = 'a' + (ch - 'a' - 15 + 26) % 26;  // Subtract 15 cyclically from lowercase characters
        }

        decrypted_string += ch;
    }

    return decrypted_string;
}

int main() {
    string encrypted_string = "WtaadLdgas";
    cout<<"Encrypted String: "<<encrypted_string<<endl;

    // Decrypt the string
    string decrypted_string = decryption(encrypted_string);
    cout<<"Decrypted String: "<<decrypted_string<<endl;

    return 0;
}