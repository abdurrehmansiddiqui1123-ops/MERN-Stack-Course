let obj = {
    name: "Ali",
    greet: function() {
        console.log(this.name);
    }
};
let fn = obj.greet;
fn();   // Output: undefined

