let loadingPromise = new Promise((resolve, reject) => {
  console.log("Loading...");
  setTimeout(() => {
    resolve("Completed");
  }, 2000);
});

loadingPromise.then((result) => {
  console.log(result);
});
