class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

function connectToDatabase() {
  throw new DatabaseError("Failed to connect to database");
}

try {
  connectToDatabase();
} catch (err) {
  console.log(err.name);      // DatabaseError
  console.log(err.message);   // Failed to connect to database
}
