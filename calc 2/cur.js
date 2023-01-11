// fetch(`https://www.commodities-api.com/api/latest?access_key=26z6hm8pxwaq8odhd875488w8aye2a89m3ugi5sl85ems6bs13c9d7q7122p&base=USD&symbols=BRENTOIL`,{
   

// }).then(res =>{
//     return res.json()
// })
//  .then(data => console.log(data)) 
// //  let myjson= JSON.parse(data) 
// .catch(error => console.log(`error`))


const currencyEl_one=document.getElementById(`currency-one`);
const amountEl_one=document.getElementById(`amount-one`);

const currencyEl_two=document.getElementById(`currency-two`);
const amountEl_two=document.getElementById(`amount-two`);

const rateEl= document.getElementById('rate');
const swap =document.getElementById('swap');

// fetch
function calculate(){
const currency_one=currencyEl_one.value;
const currency_two=currencyEl_two.value;
fetch(`https://v6.exchangerate-api.com/v6/5a97bdfea4a1058e54e38680/latest/${currency_one}`)
.then(res =>res.json())

.then(data=>{

 const rate= data.conversion_rates[currency_two];
 rateEl.innerText=`1 ${currency_one}=${rate} ${currency_two}`;
 amountEl_two.value =(amountEl_one.value * rate).toFixed(2);
});
}
// evnl
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input',calculate);



currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input',calculate);

// SWAP
swap.addEventListener('click',() =>{
    const temp =currencyEl_one.value;
    currencyEl_one.value= currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate();
})
calculate();