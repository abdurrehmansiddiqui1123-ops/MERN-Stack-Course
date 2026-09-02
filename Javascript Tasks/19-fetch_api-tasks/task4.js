async function createPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My First Post",
        body: "This is the content of my post using Fetch API.",
        userId: 1
      })
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error creating post:", error);
  }
}

createPost();