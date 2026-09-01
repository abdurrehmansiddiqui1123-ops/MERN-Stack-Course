class DateHelper {
  static getCurrentDate() {
    return new Date().toDateString();
  }
}

console.log(DateHelper.getCurrentDate());
// Output: (aaj ki date, jaise "Thu Aug 27 2026")
