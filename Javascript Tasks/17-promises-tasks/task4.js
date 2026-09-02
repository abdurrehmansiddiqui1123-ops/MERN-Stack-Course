function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id + " Data");
      resolve();
    }, 1000);
  });
}

getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => getData(4))
  .then(() => console.log("Done"));