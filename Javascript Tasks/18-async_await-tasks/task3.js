function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id + " Data");
      resolve();
    }, 1500);
  });
}

async function loadAllUsers() {
  console.log("Loading User 1");
  await getData(1);

  console.log("Loading User 2");
  await getData(2);

  console.log("Loading User 3");
  await getData(3);

  console.log("Done");
}

loadAllUsers();
