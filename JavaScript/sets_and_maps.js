//====================MAP=======================
//Holds key-value Pair

const fruit = new Map([
  ["apple", 30],
  ["Banana", 10],
]);

fruit.set("orange", 35);
console.log("size prop", fruit.size);

//Methods
//Set - Get - delete - has - forEach - entries()
//Map has size property too

for (let x of fruit.entries()) {
  console.log(x);
}

console.log("type of fruits", typeof fruit);

//====================SET========================
//Collection of unique values

let s = new Set(["x", "y", "z"]);

for (let x of s) {
  console.log(x);
}

s.delete("x");

for (let x of s) {
  console.log(x);
}
console.log(s.has("x"));
console.log("typeof s", typeof s);

//SET METHODS
//has() -  add() - delete() - values() - forEach()
