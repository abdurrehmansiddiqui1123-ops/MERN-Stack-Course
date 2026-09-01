function safeGetProperty(obj, propertyPath) {
  try {
    return obj.settings.theme;
  } catch (err) {
    return "default";
  }
}

let user1 = { settings: { theme: "dark" } };
let user2 = { name: "Ali" };   // settings hi nahi hai

console.log(safeGetProperty(user1, "settings.theme"));   // dark
console.log(safeGetProperty(user2, "settings.theme"));   // default