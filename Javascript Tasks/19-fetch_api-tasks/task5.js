async function getDataWithErrorHandling() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint-xyz");

    
    if (!response.ok) {
      throw new Error("HTTP Error! Status: " + response.status);
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

getDataWithErrorHandling();