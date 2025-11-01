// console.log("Sahishnu Wankhede");

/*
    data types in javascript :-
    primitive and non primitive

    1) Primitive datatypes
        a) String
        b) Number
        c) Boolean
        d) null
        e) undefined
        f) Symbol
        g) BigInt

    2) Non primitive datatypes (refernce type)
        a) object
        b) Array
        c) Functions


    is JAvascript dynamically typed or statically type language
*/


/*
    Stack, Heap memory
    Primitive type --> Stack memory is used

    Non-Primitive Type --> Heap memory is used
*/

let myYoutubeChannel = "hiteshchaudhary.com";
let anotherName = myYoutubeChannel;

console.log(anotherName);

anotherName = "chaiAurCode";

console.log(anotherName);


// Now heap

let userOne = {
    email : "sahishnu.wankhede@gmail.com",
    upi : "sahi@ybl"
}

let userTwo = userOne;

userTwo.email = "sahishnu.wankhede13@mail.com";

console.log(userOne.email);
console.log(userTwo.email);