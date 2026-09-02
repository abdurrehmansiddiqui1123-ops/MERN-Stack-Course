async function getPostTitles() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();

    posts.forEach(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

getPostTitles();
