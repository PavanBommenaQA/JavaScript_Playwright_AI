let value = "Pavan" ?? "default value";
console.log(value);

let response = {
    name: null,
    age: 25
};

let username = response.name ?? "Guest";
let userAge = response.age ?? 18;

console.log(username); // "Guest"
console.log(userAge);  // 25