function announce(message) {
  console.log(message + ", " + this.name);
}

let speaker = { name: "Ahmed" };
announce.call(speaker, "Attention");
// Output: Attention, Ahmed
