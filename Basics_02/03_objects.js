// singleton

// object literals
// Object.create
// const mySym = new Symbol("key1");

const JsUser = {
    name : "Sahishnu",
    "Full name" : "Sahishnu Wankhede",
    age : 321,
    location : "Nagpur",
    mySym : "myKey1",
    gmail : "sahishnu.wankhede@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "tuesday"]
}

console.log(JsUser);

console.log(JsUser.gmail)
console.log(JsUser["gmail"]);
console.log(JsUser["Full name"]);
// console.log(mySym)
console.log(JsUser.age);

JsUser.gmail="sahishnu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.gmail = "SAHISHNU.WANKHEDE@MAIL.COM"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}` );
}
console.log(JsUser.greetingTwo());