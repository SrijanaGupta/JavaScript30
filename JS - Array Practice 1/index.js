// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const flavours = [
    "Chocolate Chip",
    "Kulfi",
    "Caramel Praline",
    "Chocolate",
    "Burnt Caramel",
    "Pistachio",
    "Rose",
    "Sweet Coconut",
    "Lemon Cookie",
    "Toffeeness",
    "Toasted Almond",
    "Black Raspberry Crunch",
    "Chocolate Brownies",
    "Pistachio Almond",
    "Strawberry",
    "Lavender Honey",
    "Lychee",
    "Peach",
    "Black Walnut",
    "Birthday Cake",
    "Mexican Chocolate",
    "Mocha Almond Fudge",
    "Raspberry",
];

const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const BornFilter = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(...BornFilter);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const FullName = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(FullName);
document.getElementById("demo").innerHTML = FullName;

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const BirthSort = inventors.sort((a, b) => a.year - b.year);
console.log(BirthSort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const Years = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
    0
);
console.log(Years);

// 5. Sort the inventors by years lived
const sortYearDiff = inventors
    .map((inventor) => inventor.passed - inventor.year)
    .sort((a, b) => a - b);
console.log(sortYearDiff);
const sortYear = inventors.sort(
    (b, a) => a.passed - a.year - (b.passed - b.year)
);
console.log(sortYear);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const splitName = people.sort((a) => a.split(", "));
console.log(splitName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
];
const Counter = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
}, {});
console.log(Counter);


//Problem Solving in Arrays//
/********************************/

//find a missing number in a given integer array of 1-100. Include overflow..
function findMissingNumber(arr1){
    let missingnumArr = [];
    for (let i =1;i<=20;i++){
        if(!arr1.includes(i))
            missingnumArr.push(i);
    }
    return missingnumArr;
}

var arr1 = [1,5,6,7,8,9,10,11,12,13,15,16,18,19,20]
console.log(findMissingNumber(arr1));

//find the first and second smallest number in the unsorted array
var arr2 = [5,23,12,76,45,2,90]
function findSmallest(arr2){
   return arr2.sort((a,b)=>a-b).splice(0,2);
}

console.log(findSmallest(arr2));

//reverse an array
var arr3 = [5,23,12,76,45,2,90]
function reverseArr(arr){
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArr(arr3))

//In a given integer array, find a contagious subarray(containing atlease one number) which has the largest sum and return its sum


//perform binary search on a given array

//in an unsorted array, find the length of the longest consecutive elements seqence

//remove duplicates from an array

//find intersection of 2 sorted arrays

//there is an array which has every element repeated twice expect for one. Find that one element.

//to find pairs in an intger array whose sum is equal to the given number

//how to find repeated numbers in a array if it contains multiple duplicates

//to find kth smallest and kth largest element in an unsorted array

//flatten a given multidimensional array

//anagram

//traverse through a duplicate array and get the element with max repeats; if more than one element has same count, then get a new array that is sorted in alphabetical order.

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

var letterArr = ["F", "F", "C", "C", "E", "W", "F", "E", "E", "E", "C", "C"];
function getMaxReps(letterArr) {
  letterArr.sort();
 // console.log(letterArr);
  var countObj = {};
  var c;
  var noelement = 0;
  filteredObj = [];
  for (let i = 0; i < letterArr.length; i++) {
    if (!isEmpty(countObj)) {
      for (let key in countObj) {
        if (key === letterArr[i]) {
          c = c + 1;
          countObj[key] = c;
          noelement = 0;
        } else {
          noelement = noelement + 1;
        }
      }

      if (noelement >= 1) {
        countObj[letterArr[i]] = 1;
        c = 1;
      }
    } else {
      countObj[letterArr[i]] = 1;
      c = 1;
    }
  }

  let max = Math.max(...Object.values(countObj));
  for (key in countObj) {
    if (countObj[key] == max) {
      filteredObj.push(key);
    }
  }
  console.log(filteredObj);
}

getMaxReps(letterArr);

//WAP for getting the perfect phone number for Kelly. Conditions are - 
//1- the number should contain one digit at repeats 3 times consecutively.
//2- the number should contain one digit that repeats 4 times in the entire number
//input - list of 10 digit numbers
var numbers = ['9088897951','9088897999','9167121391','9116779390'];
function validatePhoneNo(numbers) {
    let digits, newArr = [];
    let firstCon, secondCon;
    for (let i = 0; i < numbers.length; i++) {
        firstCon = false;
        secondCon = false;
        digits = [...numbers[i]];
        //first condition validation
        for (j = 0; j < digits.length; j++) {
            if (digits[j] == digits[j + 1] && digits[j + 1] == digits[j + 2]) {
                newArr.push(digits[j])
            }
        }
        if (newArr.length === 1) {
            firstCon = true;
        }
        else
            firstCon = false; 
        newArr = [];

        //second condition validation
        digits.sort();
        for (j = 0; j < digits.length; j++) {
            if (digits[j] == digits[j + 1] && digits[j + 1] == digits[j + 2] && digits[j + 2] == digits[j + 3]) {
                newArr.push(digits[j]);
            }
        }
        if (newArr.length === 1) {
            secondCon = true;
        }
        else
            secondCon = false;   
        newArr = [];

        if (firstCon == true || secondCon == true) {
            console.log('yes');
        }
        else
            console.log('no');
    }
}

validatePhoneNo(numbers);

//accept the name (Srijana Gupta) and return a shuffled name(Gupta Srijana)

//Take array of strings (words) and return only the words with 4 letters

//negate the numbers array

//return 'BOOM' if the array contains 7