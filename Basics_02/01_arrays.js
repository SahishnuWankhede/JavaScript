// arrays

const myArr = [0, 11, 22, 113, 334, 435];
console.log(myArr);
console.log(myArr[3]);


const myArr2 = new Array(1, 22, 112, 432, 115);
console.log(myArr2);

//Array methods

myArr.push(6, 7);    //push
console.log(myArr);

myArr.pop();         //pop remove last value
console.log(myArr);

myArr.unshift(9);     //unshift --> add at index 0
console.log(myArr);

myArr.shift(12);      // shift --> add at index 1
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

 const newArray = myArr.join();
 console.log(myArr);
 console.log(newArray);

// slice and splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn1);
console.log(myn2);
