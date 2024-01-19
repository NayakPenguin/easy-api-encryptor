# NPM Package `easy-api-encryptor` 🚀
- "easy-api-encryptor" is a lightweight NPM package facilitating seamless encryption and decryption of data between Node.js and React.js. Ensure secure communication in your applications with minimal setup, making it easy to protect sensitive information during transit.

- version `easy-api-encryptor@1.0.0`
  
- <img width="794" alt="Screenshot 2024-01-19 at 10 16 35 PM" src="https://github.com/NayakPenguin/easy-api-encryptor/assets/93304796/9c65a95f-57d6-48c7-8f61-ea91c77f5329">

<br/>

## Usage Demo 🎯

<img height="300" alt="Screenshot 2024-01-19 at 10 19 23 PM" src="https://github.com/NayakPenguin/easy-api-encryptor/assets/93304796/67bb7633-5b29-4b9f-9265-4e5559460f7e">

<img height="300" alt="Screenshot 2024-01-19 at 10 19 23 PM" src="https://github.com/NayakPenguin/easy-api-encryptor/assets/93304796/c06d9fcf-6532-4846-8cae-569101ab70c2">

<br/>

## `Integrated` Encryption Algorithms ✅

- ### 1. Adding value 15 to all characters, cyclic (contributed by <a href="https://github.com/NayakPenguin" target="_blank">@NayakPenguin</a>)
  The encryption model employed here involves a simple yet effective technique of adding a cyclic value of 15 to each character in the input string. This process applies uniformly to both lowercase and uppercase characters, creating a straightforward and reversible encryption mechanism. The cyclic nature ensures that the shift wraps around, allowing for a seamless transformation while maintaining the integrity of the original character set. While this encryption model may not provide advanced security, it serves as a illustrative example for educational purposes or basic data obfuscation.
  
  <img width="500" alt="Screenshot 2024-01-19 at 10 19 23 PM" src="https://github.com/NayakPenguin/easy-api-encryptor/assets/93304796/99d9419f-1de8-44c6-978c-e650db3efe37">

  ##### Original Code Language :  `C++ 17`
  ##### Encryption Code Link : <a href="https://github.com/NayakPenguin/easy-api-encryptor/blob/main/package/public_algorithms/encryption_algorithms/adding_value_15_to_all_characters_cyclic.cpp" target="_blank">encryption_algorithms/adding_value_15_to_all_characters_cyclic.cpp</a>
  ##### Decryption Code Link : <a href="https://github.com/NayakPenguin/easy-api-encryptor/blob/main/package/public_algorithms/decryption_algorithms/adding_value_15_to_all_characters_cyclic.cpp" target="_blank">decryption_algorithms/adding_value_15_to_all_characters_cyclic.cpp</a>

<br/>

## How to Contribute 🥑
- ### 1. Contributing a String Encryption Algorithm
If you wish to contribute a new string encryption algorithm, you can do so by creating a Pull Request in any programming language of your choice. Simply implement the algorithm and explain its workings in the public file readme. Your contribution will not only enhance the project's capabilities but also provide valuable insights for fellow developers.

Upon successful integration into our main encryption algorithm, your contribution will be tagged as `Integrated`. 

<br/>

- ### 2. Contribute by Solving or Creating Issues
You can actively contribute by addressing existing issues or creating new ones. Solve problems, propose solutions, or report bugs through the GitHub issues section. Your engagement in issue resolution plays a crucial role in refining the project.

<br/>

## How to Run and Test the Code 👨‍💻👷🏻‍♂️
- Use the test forlder and link the package. (...this needs an update)


<br/>

## Bug Bounty 💰
- Participate in our bug bounty program and stand a chance to earn a reward of 100 USD by successfully unraveling the algorithm used to decode the authentic value. This enticing opportunity is exclusively available for versions v.1.1.0 and above (v1.1.x). Join our initiative to uncover and report potential vulnerabilities, and be rewarded for your contribution to enhancing our system's security.

<br/>

## Version Updates 🔥

| Version   | Update Description                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------- |
| @0.0.0    | This initial release marked the commencement of npm package testing, serving as a foundational push for development. |
| @0.0.1    | Introduced two essential functions, `{ encryption, decryption }`, facilitating string hashing capabilities. |
| @0.0.2    | Expanded functionality by adding two additional methods, `{ encrypt, decrypt, encryptObject, decryptObject }`, enabling comprehensive object encryption and decryption. |


