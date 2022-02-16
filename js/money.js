document.getElementById("first-click").addEventListener("click", function () {
    const foodInput = document.getElementById("food");
    const foodTotal = foodInput.value;
    foodInput.value = parseInt(foodTotal)
})