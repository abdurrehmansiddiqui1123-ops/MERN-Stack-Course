let uniqueId = Symbol("userId");

let user = {
  name: "Ali",
  [uniqueId]: 12345    // symbol ko key banane ke liye [] use karna padta hai
};

console.log(user);
console.log(user[uniqueId]);   // 12345
