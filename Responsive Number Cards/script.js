const shuffle = document.querySelector("#shuffle");
shuffle.addEventListener("click", shuffleFunc);
const sorting = document.querySelector("#sort");
sorting.addEventListener("click", sortFunc);

const gridItems = document.querySelectorAll(".grid-item");
const gridArray = [];


//For shuffling the numbers in the grids
function shuffleFunc() {
    gridItems.forEach((e) => gridArray.push(parseInt(e.innerHTML)));
    gridArray.sort(() => Math.random() - 0.5);
    //console.log(gridArray);

    gridItems.forEach((e) => {
        const item = gridArray.pop();
        e.innerHTML = item;
    });
}


//For sorting the numbers in the grids
function sortFunc() {
    gridItems.forEach((e) => gridArray.push(parseInt(e.innerHTML)));
    gridArray.sort((a, b) => b - a);

    gridItems.forEach((e) => {
        const item = gridArray.pop();
        e.innerHTML = item;
    });
}
