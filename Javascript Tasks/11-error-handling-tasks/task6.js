function safeParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.log("Invalid JSON:", err.message);
    return null;
  }
}

console.log(safeParseJSON('{"name": "Ali"}'));   // { name: 'Ali' }
console.log(safeParseJSON('{invalid json}'));     // Invalid JSON: ... , returns null
