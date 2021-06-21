const API_KEY = 'c312ff350e61644f5475c5e51a5c101f'

// Grabbing the ids in the DOM 
const currency_1 = document.getElementById('currency-one');
const currency_2 = document.getElementById('currency-two');
const container = document.getElementById('container');
const input = document.getElementById('input-num'); 
const output = document.getElementById('output')
// const exchange = document.getElementById('exchange-btn');

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
        console.log("data", data)
    };

    XHR.send();
};

const sendHttpRequest = (method, url) => {

}

// Currency API 
function calculateRate() {
    
    let first_selection =  currency_1.value;
    let second_selection = currency_2.value;

    console.log("first_selection", first_selection)
    console.log("second_selection", second_selection)

    let amount = input.value

    const first_rate = (data.rates[first_selection]) 
    console.log("first_rate", first_rate)
    const second_rate = (data.rates[second_selection]/first_rate * Number(amount)).toFixed(2)
    console.log("second_rate", second_rate)
    output.innerHTML = `${amount} ${first_selection} to ${second_selection} is ${second_rate}`
    
    // document.getElementById("amount-one").value = first_rate * input1Value
    // document.getElementById("amount-two").value = second_rate * input2Value

    // let amount1Rate = first_rate * data.rates;
    // amount_1.innerHTML = amount1Rate * input_1.value;
    // console.log("input-1", input_1);

    // let amount2Rate = second_rate * data.rates;
    // amount_2.innerHTML = amount2Rate * input_2.value;
    // console.log("input-2", input_2);


    // rates.innerText = `1 ${currency_1} = ${rates} ${currency_2}`;
    // amount_2.value = (amount_1.value * rates).toFixed(2)
    // base_rate_new / base_rate_old

    // console.log(data)

}

// exchange.addEventListener('click', calculateRate, getData);  
currency_1.addEventListener('change', calculateRate);
currency_2.addEventListener('change', calculateRate);
input.addEventListener('change', calculateRate);




// amount_1.addEventListener('input', calculateRate, getData);  
// amount_2.addEventListener('input', calculateRate, getData);
// container.addEventListener('onload', getData())
// swap_rates.addEventListener('click', () => {
//     const temp = currency_1.value;
//     currency_1.value = currency_2.value;
//     currency_2.value = temp;
//     calculateRate();
//     getData(data);
//   });

calculateRate(getData);
