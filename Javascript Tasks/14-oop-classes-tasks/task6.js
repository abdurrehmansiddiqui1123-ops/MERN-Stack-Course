class SecretHolder {
  #secret;

  constructor(secretValue) {
    this.#secret = secretValue;
  }

  revealSecret() {
    return this.#secret;
  }
}

let mySecret = new SecretHolder("The password is 1234");
console.log(mySecret.revealSecret());   // Output: The password is 1234
// console.log(mySecret.#secret);       // ❌ Error - bahar se access nahi ho sakta
