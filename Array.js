//array is a object which can store similar types of data in a contigious memory location.

//array index starts from 0

const myArr=[3,4,5,6,7,8,9];
console.log(myArr[0]);


const myArray=[1,2,3,4,5,6,7,];
myArray.push(8);
console.log(myArray)

// myArray.pop();
// console.log(myArray);

myArray.unshift(0);
console.log(myArray);

// myArray.shift();
// console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(7));


const demoArray = myArray.join();   //join - basically works on converting a array to string.
console.log(demoArray)
console.log(typeof demoArray);

console.log(("A",myArray));
const myArr1 = myArray.slice(1,3);
console.log(myArr1);

console.log("B",myArr);
const myArr2 = myArray.slice(1,3);

const cars = ["maruti","alto","xuv","wagnor"];
const superCars = ["bmw","audi","g-wagon","Defender"];

cars.push(superCars);
console.log(cars);

const allCars = cars.concat(superCars);
console.log(allCars);

const allNewCars = [...cars,...superCars];
console.log(allNewCars);


const anotherArray = [1,2,3[4,5,6],7[6,7[4,5]]];
const realAontherArray = anotherArray.flat(Infinity);
console.log(realAontherArray);

console.log(Array.isArray("sushant"));  ///isArray is a method to check wheather it is  a aaray or not 
console.log(Array.from("sushant"));   // from is method in which we create that it automatically creates a array.