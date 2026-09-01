function riskyTask(shouldFail) {
  try {
    if (shouldFail) {
      throw new Error("Something went wrong");
    }
    console.log("Task succeeded");
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Operation complete");
  }
}

riskyTask(false);
// Output: Task succeeded
//         Operation complete

riskyTask(true);
// Output: Error: Something went wrong
//         Operation complete
