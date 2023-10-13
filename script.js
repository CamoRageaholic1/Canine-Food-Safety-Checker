const safeFoodsForDogs = [
    "pumpkin",
    "carrot",
    "peanut butter",
    "blueberries",
    "bananas",
    "broccoli",
    "brussels sprouts",
    "cantaloupe",
    "celery",
    "cucumber",
    "green beans",
    "peas",
    "spinach",
    "sweet potato",
    "watermelon", // make sure to remove seeds and rind
    "rice",
    "oatmeal",
    "chicken",
    "turkey",
    "salmon",
    "beef",
    "steak",
    "lamb",
    "pork",
    "duck",
    "fish", // ensure it's boneless and cooked
    "rabbit",
    "venison",
    "bison",
    "apples", // make sure to remove seeds and core
    "oranges", // in small amounts
    "pineapple",
    "strawberries",
    "quinoa"
];

function checkFoodSafety() {
    const foodInput = document.getElementById("foodInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (safeFoodsForDogs.includes(foodInput)) {
        result.textContent = `${foodInput.charAt(0).toUpperCase() + foodInput.slice(1)} is safe for canine consumption.`;
        result.classList.remove("not-recommended");
        result.classList.add("safe-food");  // Add the class to make the text big and green
    } else {
        result.textContent = `${foodInput.charAt(0).toUpperCase() + foodInput.slice(1)} is not recommended for canine consumption.`;
        result.classList.add("not-recommended");
        result.classList.remove("safe-food");  // Remove the class if it exists
    }
}


