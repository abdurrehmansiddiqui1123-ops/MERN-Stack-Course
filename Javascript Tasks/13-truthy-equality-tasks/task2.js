function checkTruthy(value) {
  return value ? "yes" : "no";
}

console.log(checkTruthy("Hello"));   // yes
console.log(checkTruthy(0));         // no
console.log(checkTruthy([]));        // yes  (empty array bhi truthy hai!)
console.log(checkTruthy(""));        // no

