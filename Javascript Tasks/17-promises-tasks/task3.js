function getStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Student " + id);
      resolve();
    }, 1000);
  });
}

getStudent(1)
  .then(() => getStudent(2))
  .then(() => getStudent(3));
