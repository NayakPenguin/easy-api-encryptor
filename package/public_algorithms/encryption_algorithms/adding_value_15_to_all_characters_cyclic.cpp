#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <cmath>

using namespace std;

string encryption(string input_string) {
    int n = input_string.length();
    string encrypted_string = "";
    for (int i = 0; i<n; i++) {
        char ch = input_string[i];
        
        // Check if the character is an uppercase letter
        if (isupper(ch)) {
            ch = 'A' + (ch - 'A' + 15) % 26;  // Add 15 cyclically to uppercase characters
        }
        // Check if the character is a lowercase letter
        else if (islower(ch)) {
            ch = 'a' + (ch - 'a' + 15) % 26;  // Add 15 cyclically to lowercase characters
        }

        encrypted_string += ch;
    }

    return encrypted_string;
}

int main() {
    string input_string = "HelloWorld";
    string encrypted_string = encryption(input_string);

    cout<<"Original String: "<<input_string<<endl;
    cout<<"Encrypted String: "<<encrypted_string<<endl;

    return 0;
}