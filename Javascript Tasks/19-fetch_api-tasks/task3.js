async function getSingleUser(id) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    let user = await response.json();

    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Phone:", user.phone);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}

getSingleUser(1);