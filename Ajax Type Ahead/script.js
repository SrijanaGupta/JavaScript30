const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  
const dataArray = [];
//fetching the data using fetch() api, in order to fetch the data from a url(web server)
fetch(endPoint).then((data) =>
  data.json().then((parsedData) => dataArray.push(...parsedData))
);

console.log('Array: ',dataArray);

//method to add comma in the numbers with more number of digits
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//match between the input and the json data
function matchData(wordToMatch,dataArray){
    return dataArray.filter(data=>{
        regex = new RegExp(wordToMatch,'gi');
        return data.city.match(regex) || data.state.match(regex);
    })
}

//displaying the match in the list dynamically
function displayed(){
    console.log(this.value);
    const matched = matchData(this.value,dataArray);
    const html = matched.map(place =>{
        const match = new RegExp(this.value,'gi');
        const cityName = place.city.replace(match,`<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(match,`<span class="hl">${this.value}</span>`)
        return `
                <li>
                <span class="name">${cityName} , ${stateName} </span>
                <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
    })
    suggestions.innerHTML = html;
}

//adding the event listener on input
const searchinput = document.querySelector('.search').addEventListener('change',displayed);
const input = document.querySelector('.search').addEventListener('keyup',displayed);

//adding corresponding result of the above event on to the list created with class suggestions
const suggestions = document.querySelector('.suggestions');