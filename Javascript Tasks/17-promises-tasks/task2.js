function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login Successful");
    } else {
      reject("Invalid username or password");
    }
  });
}

login("admin", "1234")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


login("admin", "wrong")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

