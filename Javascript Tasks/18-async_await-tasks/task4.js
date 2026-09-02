function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ali" });
    }, 1000);
  });
}

async function displayUser() {
  let user = await getUser();
  console.log(user);
  console.log(user.name);   
}

displayUser();