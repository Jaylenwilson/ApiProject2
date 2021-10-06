const key = 'ae65d20996182ab5b564f803396cb5fb';
const baseURL = 'http://api.coinlayer.com/api/live';

const crypto = document.querySelector('form');

const cryptoLogo = document.getElementById('cryptologo');

cryptoLogo.addEventListener('click', getCryptoData);



let url;

function getCryptoData() {


    url = `${baseURL}?access_key=${key} `
    console.log('URL:', url);

    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayCrypto(json);
        })

}

function displayCrypto(json) {
    console.log(json.rates[0])
    let target = json.target;
    let timeStamp = json.timeStamp;
    let rates = json.rates;
    console.log(target, timeStamp)

}






// const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; // URL to the api
// const key = 'UxEEBVUuJZ7APV2lgcXFpcFTs26oQ7VK'; // Links file to our account
// let url; // Declare URL as a variable

// //Search form
// const searchTerm = document.querySelector('.search'); // Pulling a specific class name from html document and asssigning it a variable
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form');//tag
// const submitBtn = document.querySelector('.submit');

// //Results Navigation
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');
// const section = document.querySelector('section');// tag

// nav.style.display = 'none'; // ??
// let pageNumber = 0; //declares variable and assigns a value
// let pageSize = 5;
// // console.log('PageNumber:', pageNumber);
// let displaNav = false // declares variable to be false

// searchForm.addEventListener('submit', fetchResults); //declares event (submit) action runs fetch function when the submit event happens
// nextBtn.addEventListener('click', nextPage); // calls function
// previousBtn.addEventListener('click', previousPage);

// function fetchResults(e) {

//     // console.log(e);
//     e.preventDefault(); // prevents submit action from sendig the data off

//     url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //building url for our resluts
//     // console.log('URL:', url);

//     if (startDate.value !== '') { //if the start date is not empty then attach the start date to the url
//         // console.log(startDate.value)
//         url += '&begin_date=' + startDate.value;
//         // console.log('URL:', url);
//     }

//     if (endDate.value !== '') {
//         // console.log(endDate.value)
//         url += '&end_date=' + endDate.value; //attach end date to url if it is not empty
//         // console.log('URL:', url);
//     }

//     fetch(url) // url is fetched
//         .then(function (result) { // performs result function
//             console.log(result)
//             return result.json();// returns .json function
//         })
//         .then(function (json) { // takes json result 
//             console.log(json);
//             displayResults(json); // calls a function and passes the json result
//         })
// }

// function displayResults(json) { // function
//     console.log('Display Results', json);
//     // console.log(json.response.docs);

//     while (section.firstChild) { // while sction firstchild exist, get rid of results when we do another search 
//         section.removeChild(section.firstChild);
//     }

//     let articles = json.response.docs; // navigating the json with .notation
//     // console.log(articles);

//     if (articles.length === 0) { // if responses are 0 there are no results
//         console.log('No results');
//     } else {
//         let counter = pageNumber * pageSize;

//         while (counter < ((pageNumber + 1) * pageSize)) {
//             if (counter < articles.length) {
//                 // console.log(i);
//                 let article = document.createElement('article');
//                 let heading = document.createElement('h2');
//                 let link = document.createElement('a');
//                 let img = document.createElement('img');
//                 let para = document.createElement('p');
//                 let clearfix = document.createElement('div');
//                 let current = articles[counter]; // loops through eacg article

//                 // console.log('Current:', current);

//                 link.href = current.web_url; // creating an anchor tag with the weburl of the current article
//                 link.textContent = current.headline.main; // assigning text to our link in the words of our property 
//                 para.textContent = 'Keywords: '; // p element has a keywors property that is empty

//                 for (let j = 0; j < current.keywords.length; j++) {
//                     let span = document.createElement('span');
//                     span.textContent += current.keywords[j].value + ' '; // add text to the tag
//                     para.appendChild(span);// appends child
//                 }

//                 if (current.multimedia.length > 0) {
//                     img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;  //adds the currenrt articles multi media url to the image source
//                     img.alt = current.headline.main; // if the image doesnt show it displays the header
//                 }

//                 clearfix.setAttribute('class', 'clearfix'); //makes a div with a class clearfix
//                 heading.appendChild(link);
//                 article.appendChild(heading);
//                 article.appendChild(img);
//                 article.appendChild(para);
//                 article.appendChild(clearfix);
//                 section.appendChild(article);
//             }

//             counter++;
//         }
//         debugger
//         if (articles.length > 0)
//             nav.style.display = "block";

//         if (pageNumber === 0) {
//             document.getElementById('btnPrevious').disabled = true;

//         } else {
//             document.getElementById('btnPrevious').disabled = false;
//         }

//         if ((pageNumber + 1) * pageSize >= articles.length) {
//             document.getElementById('btnNext').disabled = true;
//         } else {
//             document.getElementById('btnNext').disabled = false;
//         }


//         // for (let i = 10 * pageNumber; i < articles.length - (pageNumber + 1 * 10); i++) {
//         //     // console.log(i);
//         //     let article = document.createElement('article');
//         //     let heading = document.createElement('h2');
//         //     let link = document.createElement('a');
//         //     let img = document.createElement('img');
//         //     let para = document.createElement('p');
//         //     let clearfix = document.createElement('div');
//         //     let current = articles[i]; // loops through eacg article

//         //     // console.log('Current:', current);

//         //     link.href = current.web_url; // creating an anchor tag with the weburl of the current article
//         //     link.textContent = current.headline.main; // assigning text to our link in the words of our property 
//         //     para.textContent = 'Keywords: '; // p element has a keywors property that is empty

//         //     for (let j = 0; j < current.keywords.length; j++) {
//         //         let span = document.createElement('span');
//         //         span.textContent += current.keywords[j].value + ' '; // add text to the tag
//         //         para.appendChild(span);// appends child
//         //     }

//         //     if (current.multimedia.length > 0) {
//         //         img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;  //adds the currenrt articles multi media url to the image source
//         //         img.alt = current.headline.main; // if the image doesnt show it displays the header
//         //     }

//         //     clearfix.setAttribute('class', 'clearfix'); //makes a div with a class clearfix
//         //     heading.appendChild(link);
//         //     article.appendChild(heading);
//         //     article.appendChild(img);
//         //     article.appendChild(para);
//         //     article.appendChild(clearfix);
//         //     section.appendChild(article);
//         // }
//     }


// }

// function nextPage(e) { // allows us to go to next page and results which page number we are on fetches
//     pageNumber++

//     fetchResults(e);
//     console.log('Page Number:', pageNumber);
// }

// function previousPage(e) {

//     // console.log('Previous button clicked');
//     if (pageNumber > 0) {
//         pageNumber--;
//     } else {
//         return;
//     }

//     fetchResults(e); //calls function
//     console.log('Page:', pageNumber); //logs pagenumber
// }



