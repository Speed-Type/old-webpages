let output =  document.getElementById('output');
let totalMoneys = document.getElementById('totalMoney');
let basicCost = document.getElementById('inputNormalCost');
let tipPercentage = document.getElementById('inputTipPercentage');
let button = document.getElementById('button');

function calculateTip()
{
    if(basicCost.value.length > 0 && tipPercentage.value.length > 0)
    {
        let normalCost = parseInt(basicCost.value);
        let percentage = parseInt(tipPercentage.value) / 100;
        let total = (normalCost * percentage);
        output.innerHTML = "Tip: $" + total.toFixed(2);
        totalMoneys.innerHTML = "Total: $" + (total + normalCost).toFixed(2);
    }
    else
    {
        alert("Please input the correct values.");
    }
}

button.onclick = calculateTip;