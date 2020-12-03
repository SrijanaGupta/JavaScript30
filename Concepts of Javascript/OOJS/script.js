// function Shape(sides, sideLength) {
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//     // Write your code below here
//   Shape.prototype.calcPerimeter = function(){return this.sides * this.sideLength};
// //       const perimeter = this.sides * this.sideLength;
// //       console.log(`Perimeter of ${this.name} is ${perimeter}`);
// //   }

//   const square = new Shape(4,5);
//   console.log(square.calcPerimeter());

// //   const triangle = new Shape('triangle',3,3);
// //   triangle.calcPerimeter();

// //   class Shape{
// //       constructor(name, sides, sideLength){
// //            this.name = name;
// //            this.sides = sides;
// //            this.sideLength = sideLength;
// //       }
// //            calcPerimeter(){
// //             const perimeter = this.sides * this.sideLength;
// //                 console.log(`Perimeter of ${this.name} is ${perimeter}`);
// //            }

// //            get perimeter(){
// //                return this.calcPerimeter();
// //            }
// //       }

// //     // const square = new Shape('square',4,5);
// //     // square.calcPerimeter();

// //     // const triangle = new Shape('triangle',3,3);
// //     // triangle.calcPerimeter();


// //     class Square extends Shape{
// //         calcArea(){
// //             const area = this.sideLength * this.sideLength;
// //             console.log(`The area of the square is ${area}`);
// //         }
// //     }

// //     const square = new Square('sqaure',4,5);
// //     square.calcPerimeter();
// //     square.calcArea();



function divide(){
    var result=1;
    if(arguments.length===0){
        throw "Minimum two arguments missing";
    }
    else if(arguments.length==1){
        throw "Minimum two arguments missing";
    }
    else
    {
        for(let i=0;i<arguments.length;){
            console.log(arguments[i]);
            console.log(arguments[i+1]);
            result = arguments[i]/arguments[i+1];
            i++;
        }
    }
    console.log(result);
}

divide(1000, 10);
