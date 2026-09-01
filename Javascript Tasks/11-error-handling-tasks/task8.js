try {
  try {
    let obj = {};
    console.log(obj.user.name);   // TypeError - obj.user undefined hai
  } catch (innerErr) {
    console.log("Inner catch:", innerErr.message);
    throw new Error("Rethrown: " + innerErr.message);
  }
} catch (outerErr) {
  console.log("Outer catch:", outerErr.message);
}
// Output: Inner catch: Cannot read properties of undefined (reading 'name')
//         Outer catch: Rethrown: Cannot read properties of undefined (reading 'name')
