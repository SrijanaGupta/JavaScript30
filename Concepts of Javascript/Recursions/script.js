// // Implement getIn here
// const getIn = (o, p) => {
//     console.log(typeof(p));
//       p.forEach(e => {
//           console.log(e);
//         for (let key in o) {
//           if(e===key){
//           console.log(e);
//           console.log("Key is - ", key);
//           console.log("Value is - ", o[key]);
//           console.log('data type is - ',typeof o[key]);
//           if (typeof o[key] === "object") {
//             getIn(o[key], e);
//             //getIn(o[key], element);
//           }
//           else if(typeof o[key]==='string'){
//               values.push(o[key])
//               console.log('Values that are string are - ',values)};}
//           }
//           console.log("Path traversed - ", e);})}

//   //  if(element ===p){

//   // }
// //   if (Number(key) == key) {
// //     element.push(`[${key}]`);
// //   } else element.push(key);

// let element = [];
// let values = []
// let obj = document.getElementById("object").value;
// obj = JSON.parse(obj);
// //console.log(obj);
// let path = document.getElementById("path").value;
// let pathArray = Object.values((path.split(".")));
// console.log("Actual Path - ", pathArray);
// console.log(typeof(pathArray));

// getIn(obj, pathArray);

//         pathArray.forEach((e,index)=>{
//                 if (e===o[key])
//                     {
//                     console.log(e);
//                     element = pathArray.filter((i)=>i!=e);
//                     console.log(element);}
//document.getElementById('getElement').addEventListener('click',getIn(obj,path));

var x=4;
obj = {
    x:3,
    bar : function(){
        //var x=2;
        setTimeout(function(){
            //var x=1;
            alert(this.x);
        },1000)
    }
}

obj.bar();

// function bar(){
//     return foo;
//     foo = 10;
//     function foo(){}
//     var foo =11;
// }

// console.log(typeof((bar())));

// function testhack(){
//     var test = [];
//     for(var z=0;z<5;z++){
//         test[z] = function(){
//             return z;
//         }
//         return test;
//     }   
// }

function anagram(string1, string2){
    var arr1 = [...string1];
    var arr2 = [...string2];
    var count = 0;
    if(arr1.length == arr2.length){
        for(let i=0;i<arr1.length;i++){
            arr2.forEach((element)=>{
                if(element == arr1[i]){
                  count++;  
                }
            });
        }
        if(count==arr1.length){
            console.log('Anagram') ;}
        else{
            console.log('Not an Anagram') ;
        }    
    }
}

anagram('listen','silent');


new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('Oh No! ')
  })
  .catch(error => {
    return "actually, that worked"
  })
  .catch(error => console.log(error.message));



  var arr = [
      {id:1,text:'1'},
      {id:2,text:'2'}];
  console.log(arr[0].id);


  function addUpdate(input,arr){
    arr.forEach((element)=>{
        if(typeof(input)==='number' || typeof(input)==='string'){
            if(element == input)
                return arr;
                else
                return arr.push(input);
        }
        if(typeof(input)==='object'){
            if(input.id===element.id){
                element.text = input.text;
                return arr;
            }
            else
                {
                    arr.push(input);
                    return arr;
                }
        }
    });
}


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
   
// function Child(favouriteToy) {
//     this.favouriteToy = favouriteToy;
//    }

//    Person.prototype = Child;
//    //console.log(kid.__proto__);

//    Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//    };
//    // it has to be new Child and not new Person
//    var kid = new Child('Lydia', 'Hallie');
//    //var kid = new Child('Lydia', 'Hallie');
   
//    console.log(kid.getFullName());


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//  }
 
// Rectangle.prototype.area = ()=>{this.width*this.height};

// class Square extends Rectangle{
//     area(){
//         return this.area();
//     }
// }


// const rec = new Rectangle(3, 4);
// const sqr = new Square(3);
// console.log(rec.area()); // 12 
// console.log(sqr.area());  // 9

function ensure(value) {
    if(value===undefined || value===null)
    {console.log(value);
      throw 'Value has to be initialised'}
    else
      {return value}
    // Your code goes here
  }

  //console.log(ensure(2));
  
  try {
    console.log(ensure(NaN));
  } catch(err) {
    console.log(err);
  }