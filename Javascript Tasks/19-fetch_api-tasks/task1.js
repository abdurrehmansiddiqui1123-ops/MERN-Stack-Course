async function getUserNames() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    users.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

getUserNames();