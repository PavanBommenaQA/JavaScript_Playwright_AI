let sideA = 25;
let sideB = 25;
let sideC = 25;
if (sideA === sideB && sideB === sideC && sideC === sideA) {
    console.log("It's a Triangle")

} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("It's a isosceles")
} else {
    console.log("It's a scalene")
}