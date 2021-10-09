const key = 'bc638b10367179996d6ea47d';
const baseURL = 'https://v6.exchangerate-api.com/v6/'
    ;

let usd = document.getElementById('usd');
let afn = document.getElementById('afn');
let aed = document.getElementById('aed');
let all = document.getElementById('all');
let amd = document.getElementById('amd');
let ang = document.getElementById('ang');
let aoa = document.getElementById('aoa');
let ars = document.getElementById('ars');

let table = document.getElementById('table')
const cryptoLogo = document.getElementById('cryptologo');

cryptoLogo.addEventListener('click', getCryptoData);



let url;

function getCryptoData() {


    url = `${baseURL}${key}/latest/USD `
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
    console.log(json.conversion_rates)
    let rates = json.conversion_rates;

    // for (let each of rates) {
    //     console.log(each);


    // }


    tableData1 = document.createElement('td');
    tableData2 = document.createElement('td');
    tableData3 = document.createElement('td');
    tableData4 = document.createElement('td');
    tableData5 = document.createElement('td');
    tableData6 = document.createElement('td');
    tableData7 = document.createElement('td');
    tableData8 = document.createElement('td');

    tableData1.innerHTML = `  $${rates.USD} `;
    tableData2.innerHTML = `<td>  $${rates.AFN} <td>`;
    tableData3.innerHTML = `<td>  $${rates.AED} <td>`;
    tableData4.innerHTML = `<td>  $${rates.ALL} <td>`;
    tableData5.innerHTML = `<td>  $${rates.AMD} <td>`;
    tableData6.innerHTML = `<td>  $${rates.ANG} <td>`;
    tableData7.innerHTML = `<td>  $${rates.AOA} <td>`;
    tableData8.innerHTML = `<td>  $${rates.ARS} <td>`;

    usd.appendChild(tableData1);
    afn.appendChild(tableData2);
    aed.appendChild(tableData3);
    all.appendChild(tableData4);
    amd.appendChild(tableData5);
    ang.appendChild(tableData6);
    aoa.appendChild(tableData7);
    ars.appendChild(tableData8);




}






