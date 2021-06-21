const API_KEY = 'c312ff350e61644f5475c5e51a5c101f'

// Grabbing the ids in the DOM 
const currency_1 = document.getElementById('currency-one');
const currency_2 = document.getElementById('currency-two');
const container = document.getElementById('container');
const input = document.getElementById('input-num'); 
const output = document.getElementById('output')

const rates = document.getElementById('rate');
let data;
window.onload = function(){
    getData();
}

const getData = () => {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', `http://api.exchangeratesapi.io/v1/latest?access_key=c312ff350e61644f5475c5e51a5c101f`);
   
    XHR.onload = () => {
        data = JSON.parse(XHR.response);
    };

    XHR.send();
};

const sendHttpRequest = (method, url) => {

}

// Currency API 
function calculateRate() {
    
    let first_selection =  currency_1.value;
    let second_selection = currency_2.value;

    let amount = input.value

    const first_rate = (data.rates[first_selection]) 
    const second_rate = (data.rates[second_selection]/first_rate * Number(amount)).toFixed(2)
    output.innerHTML = `${amount} ${first_selection} to ${second_selection} is ${second_rate}`
    

}
 
currency_1.addEventListener('change', calculateRate);
currency_2.addEventListener('change', calculateRate);
input.addEventListener('change', calculateRate);
