try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch (err) {
  console.log("This will never run:", err.message);
}
console.log("This line runs immediately, error above crashes silently in console");

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Async error handled properly"));
  }, 1000);
}).catch(err => {
  console.log("Caught with Promise:", err.message);
});
