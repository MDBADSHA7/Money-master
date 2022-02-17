document.getElementById("first-click").addEventListener("click", function () {
    const monthlyIncomeInput = document.getElementById("monthly-income");
    const monthlyIncome = monthlyIncomeInput.value;
    const newIncomeTotal = parseFloat(monthlyIncome);
    // console.log(newIncomeTotal);
    const foodInput = document.getElementById("food");
    const foodCoast = foodInput.value;
    const foodTotal = parseFloat(foodCoast);
    const rentInput = document.getElementById("rent");
    const rentCoast = rentInput.value;
    const rentTotal = parseFloat(rentCoast)
    const clothInput = document.getElementById("cloth");
    const clothCoast = clothInput.value;
    const clothTotal = parseFloat(clothCoast);
    const totalCalculation = foodTotal + rentTotal + clothTotal;
    // console.log(totalCalculation);
    // Update total expances
    const finalExpanse = document.getElementById("expanse-total");
    const totalCoastText = finalExpanse.innerText;
    const newUpdateTotal = parseFloat(totalCoastText);
    const finalTotal = newUpdateTotal + totalCalculation;
    finalExpanse.innerText = finalTotal;

    // monthly-income
    const finalBalance = document.getElementById("rest-balance");
    const updateFinalBalanceText = finalBalance.innerText;
    const newFinalBalance = parseFloat(updateFinalBalanceText);
    const newBalance = newIncomeTotal - finalTotal;
    finalBalance.innerText = newBalance;
    // clear foodInput
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    monthlyIncomeInput.value = '';
});
// saving money count
document.getElementById("save").addEventListener("click", function () {

});
