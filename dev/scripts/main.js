
//creating variable for data url
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//creating empty array
const cities = [];

fetch(endpoint)
    //getting the json data.  .json method only returns a promise
    .then(blob => blob.json())
    //one way to put the data in the array is to change const to let and use cities = data
    // .then(data => cities=data)
    //if you want to keep the variable const then PUSH the data into the array with spread.
    .then(data => cities.push(...data))

function findMatches (wordToMatch, cities){
    return cities.filter(place =>{
    //here we need to figure out if the city or state matches what was searched
    //so we are creating a regex to match the letters typed.  We are passing in wordToMatch.  Second param is the flags we want to pass.  'g' is global, it will look thru the entire string. 'i' insenitive meaning it will match lowercase as well.
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
});

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    
    const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    
        return `
        <li>
            <span className="name">${cityName}, ${stateName} </span>
            <span className="population">${numberWithCommas(place.population)} </span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
    
}

//querying selecting the .serch class and .suggestions class
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//we are listening for a 'change' on .search and running displayMatches once is happens.
searchInput.addEventListener('change',displayMatches);
//now listening for 'keyup' event on .search
searchInput.addEventListener('keyup', displayMatches);
