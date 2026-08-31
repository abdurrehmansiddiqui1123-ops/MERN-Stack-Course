let original = [1, 2, 3];
let sameReference = original;   // yeh copy nahi, same array ko point kar raha hai

sameReference.push(4);
console.log(original);        // Output: [1, 2, 3, 4]  — yeh bhi change ho gaya!
console.log(sameReference);   // Output: [1, 2, 3, 4]

// Ab spread se asli copy banate hain
let trueCopy = [...original];
trueCopy.push(5);
console.log(original);    // Output: [1, 2, 3, 4]     — safe raha, change nahi hua
console.log(trueCopy);    // Output: [1, 2, 3, 4, 5]