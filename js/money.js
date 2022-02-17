document.getElementById("first-click").addEventListener("click", function () {
    // main-income-count
    const monthlyIncomeInput = document.getElementById("monthly-income");
    const monthlyIncome = monthlyIncomeInput.value;
    const newIncomeTotal = parseInt(monthlyIncome);
    // console.log(newIncomeTotal);

    // food coast-count

    const foodInput = document.getElementById("food");
    const foodCoast = foodInput.value;
    const foodTotal = parseInt(foodCoast);

    // rent coast-count
    const rentInput = document.getElementById("rent");
    const rentCoast = rentInput.value;
    const rentTotal = parseInt(rentCoast)

    // cloth coast-count
    const clothInput = document.getElementById("cloth");
    const clothCoast = clothInput.value;
    const clothTotal = parseInt(clothCoast);

    // total expanse-coast
    const totalCalculation = foodTotal + rentTotal + clothTotal;

    // console.log(totalCalculation);

    // Update total expances-coast
    const finalExpanse = document.getElementById("expanse-total");
    const totalCoastText = finalExpanse.innerText;
    const newUpdateTotal = parseInt(totalCoastText);
    const finalTotal = newUpdateTotal + totalCalculation;
    finalExpanse.innerText = finalTotal;

    // different between (TotalIncome and TotalExpanseCoast)

    const finalBalance = document.getElementById("rest-balance");
    const updateFinalBalanceText = finalBalance.innerText;
    const newFinalBalance = parseInt(updateFinalBalanceText);
    const newBalance = newIncomeTotal - finalTotal;
    finalBalance.innerText = newBalance;

    // clear foodInput
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    // monthlyIncomeInput.value = '';
});
// Error handeling

// saving-money-count
document.getElementById("save").addEventListener("click", function () {
    const monthlyIncomeInput = document.getElementById("monthly-income");
    const monthlyIncome = monthlyIncomeInput.value;
    const newIncomeTotal = parseInt(monthlyIncome);
    const saveInput = document.getElementById("saving-money");
    const saveInputText = saveInput.value;
    const updateSaveInput = parseInt(saveInputText);
    const countInput = document.getElementById("saving-count")
    const countInputText = countInput.innerText;
    const countTotal = parseInt(countInputText);
    const finalUpdateTotal = updateSaveInput + countTotal;

    // determine saving-parsentage 

    const newFinalUpdateTotal = newIncomeTotal * (finalUpdateTotal / 100);
    countInput.innerText = newFinalUpdateTotal;
    // remaining balance

    const remainingInput = document.getElementById("remaining-balance");
    const remainingInputText = remainingInput.innerText;
    const remainingInputTotal = parseInt(remainingInputText);
    const updateremainimgBalance = remainingInputTotal + newFinalUpdateTotal;
    const totalRemaining = newBalance - updateremainimgBalance;
    remainingInput.innerText = totalRemaining;
});