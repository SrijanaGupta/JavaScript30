//var

//scope is current execution context
var name = "Srijana";
function displayName() {
  var name = "Ayush";
  console.log("Name inside the function - ", name);
}

displayName();
console.log(name);

if (true) {
  var name = "Abhay";
  // it is global scope i.e.; reassignment happenining because if block is not a function.
}
console.log(name);

//can be redeclared/ updated within the same scope
var age = 24;
var age = 28;
console.log(age);

//declaration hoisted at top and initialisation to undefined, if not explictely assigned
console.log(text);
var text = "Hello";

//let

//cannot be redeclared within the same scope
let num = 28;
//let num = 30
console.log(age);

//can be reinitialized within the same scope
let n = 28;
n = 30;
console.log(n);

//has a block scope i.e; within {}
let sport = "Cricket";
if (true) {
  let sport = "Football";
}
console.log(sport);

//declaration hoisted to the top of the scope, but it is not initialized
//console.log(t);
let t = "Hello";

//const

//cannot be re-initialised
const q = "Srijana";
//q= 'What the hell?';
console.log(q);

//cannot be declared
// const w = 'Srijana';
// const w = 'What the hell?';
// console.log(w);

//const with objects - The object cannot be reassigned when declared with const
const obj = {
  name: "Srijana",
  age: 28,
};
// obj = {
//     name: 'Abhay',
//     age:24
// }
console.log(obj);

//the values of the object can be updated
obj.name = "Abhay";
console.log(obj);

//scope

var outer = "123";
function outerfunction() {
  var outer = "435";
  let one = "first";
  console.log(outer);
  function secondFunction() {
    console.log(one);
    let two = "second";
    function thirdFunction() {
      console.log(two);
      let three = "third";
    }
    thirdFunction();
  }
  secondFunction();
}

outerfunction();

// let i = 10;
// for(let i=0; i<=5; i++){
//     console.log(i);
// }
// console.log(i);

//in block also, the global declaration of var is valid
var i = 10;
for (var i = 0; i <= 5; i++) {
  console.log(i);
}
console.log(i);

var x = 1;
function fi() {
  var x = 30;
  console.log(x);
}

//but it is not valid in the function scope(local scope)
fi();
console.log(x);

//setTimeout()
// setTimeout(()=>alert('hello'),1000);

//setInterval
// const p = document.querySelector('#p');
// setInterval(() => {
//     console.log('Hello');
// }, 90000);

//callback
function first(second) {
  setTimeout(() => {
    console.log("Hello");
    second();
  }, 1000);
}

function second() {
  console.log("Bye");
}

first(second);

//promise
// let promise =fetch('http://ghibliapi.herokuapp.com/people/');
// promise.then((response)=>{
//     response.json().then((data)=>console.table(data));
// })
// .catch((err)=>{console.log(err)});

//Promises removes the problem of callback hell
// app.post('/buy-thing',(req, res)=>{
//     const customer = req.body

//     chargeCustomer(customer).
//     then(_=> addToDatabase(customer)).
//     then(_=> sendEmail(customer)).
//     then(result=>res.send('success')).
//     catch((err)=>console.log(err));
// })

//Promise.all()
function AA() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("AA"), 200);
  });
}

function BB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("BB");
    }, 300);
  });
}

function CC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("CC");
    }, 500);
  });
}

//using Promise.all() instead of async await for each function returning promise.
//This optimises the code upto a great extent
async function msg() {
  const [a, b, c] = await Promise.all([AA(), BB(), CC()]);
  console.log(`${a} ${b} ${c}`);
}
msg();

//This
function abc() {
  var value1 = 20;
  console.log(this.value1);
}

var value1 = 25;
var obj1 = {
  value1: 15,
  abc: abc,
};

//treating function as a element of object obj1
// obj1.abc();

//treating function as standalone function being assigned to variable changed
var changed = obj1.abc;
changed();

//using call() to bind the obj to this refernce(the first parameter to call() is this)
abc.call(obj1);

//'new' binding of this
var name = "Abhay";
function efg() {
  //this itself has converted into an object
  var name = "Srijana";
  this.greet = function () {
    return `Hi. This is ${this.name}`;
  };
}
var result1 = new efg(); // binds this to function environment. Hence the variable in global context is not considered
console.log(result1.greet());

//Spread operator/Rest operator

//converting list into string
var names = ["Srijana", "Abhay", "Archana"];
console.log(...names);

//converting string into list
var me = "Srijana";
console.log([...me]);

//converting list of strings into array of strings
function planets(...args) {
  console.log(args);
  console.log(typeof args);
}

planets("Earth", "Jupiter", "Saturn", "Venus");

//joining the 2 arrays
var age = [28, 24, 48];
console.log([...names, ...age]);

//creating copy of an array
var ageCopy = [...age];
console.log(ageCopy);

console.log(2 << (5 - 1));

const sum = (a) => (b) => a + b;
console.log(sum(10)(10));

const myPromise = new Promise((resolve, reject) => {
  resolve(1);
});
myPromise
  .then((a) => {
    return promise2;
  })
  .then((a) => {
    return promise3;
  })
  .then((a) => {
    console.log(a);
  });
const promise2 = new Promise((resolve, reject) => {
  resolve(2);
});
const promise3 = new Promise((resolve, reject) => {
  resolve(3);
});

if (" ") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

console.log(50 + "5" + "5");
console.log(90 + +"20" + "7");
console.log(7 + -"1" + "2");
console.log(+"10" + "11" + "20");
console.log("C" - "B" + "2");
console.log("A" - "B" + 2);

//         1. <button (click)="foo++">Foo Increment</button>
// 2. <button (click)="foo+=">Operator Assignment</button>
// 3. <button (click)="foo | date">Date</button>

function hoisting() {
  for (let i = 0; i < 5; i++) {
    var j = 15;
    console.log(i);
  }
  console.log(j);
  console.log(i);
}

hoisting();

//debouncing and throttling
function buttonClick() {
  const p = document.querySelector("#p");
  console.log(p);
  p.innerHTML = "The button is clicked!!";
}

//this executes the function in regular interval
function throttle() {
  var timerId;
  if (timerId) {
    return;
  }
  timerId = setTimeout(function () {
    buttonClick();
    timerId = undefined;
  }, 3000);
}

//this executes the function only after some cooling period
function debounce() {
  var timerId;
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(buttonClick, 1000);
}

//Promise
async function asyncCheck() {
  return Promise.reject("Okay it is async");
}

asyncCheck().catch((val) => console.log(val));

//Prototype Inheritance
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Child(favouriteToy) {
  this.favouriteToy = favouriteToy;
}

Person.__proto__.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Child.prototype = Person;

// it has to be new Child and not new Person
var kid = new Child("Lydia", "Hallie");
//console.log(kid.__proto__.Person.getFullName);
console.log(Person.getFullName);
//var kid = new Child('Lydia', 'Hallie');
console.log(Child.getFullName());
console.log(Child.getFullName.call(kid));
console.log(kid.__proto__.getFullName());


//Hoisting scenario
var pumpkin = 1;
console.log(pumpkin);
function addPumpkin(){
  var pumpkin;
  console.log(pumpkin);
  var pumpkin = 2;
  console.log(pumpkin);
}

addPumpkin();


var func = function(x){
  delete x;
  return x;
}(0);

console.log(func);

var fynd = {x:1}
function fyndTest(){
  delete fynd.x;
  return fynd.x
}

console.log(fyndTest());

//converting number into percentage
var ratio = ["0.03935382863419896", "0.00935382863419896", "0.30935382863419896", "0.10935382863419896", "0.60935382863419896", "0.000935382863419896"]


//functions in JS
function js(a,f = ()=>a){
  var a;
  var b = a;
  a = 2;
  return [a,b,f()];
};

console.log(js(1));

//context of THIS
const myPrecious = {
  firstName:'John',
  func : function(){
    const self = this;
    console.log("Name:",this.firstName); //context is myPrecious
    console.log("Name: ",self.firstName); //context is myPrecious
    (function(){
      console.log(this);
      console.log("Name: ",this.firstName);//context is outer function
      console.log("Name: ",self.firstName);//
    }());
  }
};

myPrecious.func();

const video = {
  title : 'a',
  showTitle(){
    console.log(this.title);
    (() => console.log(this.title))();
  }
}

video.showTitle();