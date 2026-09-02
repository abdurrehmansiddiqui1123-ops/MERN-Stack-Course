function login(password) {
  return new Promise((resolve, reject) => {
    if (password === "1234") {
      resolve("Login Successful");
    } else {
      reject("Wrong Password");
    }
  });
}

async function attemptLogin(password) {
  try {
    let result = await login(password);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

attemptLogin("1234");   
attemptLogin("0000");   

