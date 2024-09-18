
// let apiKey = "fca_live_xokl4kRWd1R5YFaiGRu61zRDGJ0nuNb6AjOeC23I"
// let url = https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_xokl4kRWd1R5YFaiGRu61zRDGJ0nuNb6AjOeC23I&base_currency=INR&currencies=USD
let BaseUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_xokl4kRWd1R5YFaiGRu61zRDGJ0nuNb6AjOeC23I`


let dropdowns = document.querySelectorAll(".dropdown select");
let convertFrom = document.querySelector(".from select")
let convertTo = document.querySelector(".to select")
let exchange = document.querySelector(".exchangeLogo")



// console.log(dropdown.innerHTML.trim())
for (const select of dropdowns) {
    for (countryCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = countryCode;
        newOption.value = countryCode;
        if (select.name === "from" && countryCode === "INR") {
            newOption.selected = "Selected"
        }
        else if (select.name === "to" && countryCode === "USD") {
            newOption.selected = "Selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
        
    })
    exchange.addEventListener('click', (evt)=> {
        console.log(newOption.value)
    })
}

updateFlag = (element) => {
    let curCode = element.value;
    // console.log(curCode)
    let countryCode = countryList[curCode]
    // console.log(countryCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amVal = amount.value;
    if (amVal === "" || amVal < 1) {
        amVal = 1;
        amount.value = "1";
    }

    let newURL = `${BaseUrl}&base_currency=${convertFrom.value}&currencies=${convertTo.value}`;
    // console.log(newURL)
    let currencyTO = convertTo;
    let response = await fetch(newURL);
    let obj = await response.json();
    document.querySelector(".msg").innerText = ((obj["data"][convertTo.value]) * amVal);
})

