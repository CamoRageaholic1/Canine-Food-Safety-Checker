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

function isPlural(word) {
    if (word.endsWith("'s")) {
        return false; // consider words ending in 's as singular
    }
    return word[word.length - 1] === 's';
}

function checkFoodSafety() {
    const rawInput = document.getElementById("foodInput").value.toLowerCase();
    const foodInput = rawInput.endsWith("'s") ? rawInput.slice(0, -2) : rawInput; // remove 's if it exists
    const result = document.getElementById("result");
    const verb = isPlural(rawInput) ? "are" : "is";

    if (safeFoodsForDogs.includes(foodInput)) {
        result.textContent = `${rawInput.charAt(0).toUpperCase() + rawInput.slice(1)} ${verb} safe for canine consumption.`;
        result.classList.remove("not-recommended");
        result.classList.add("safe-food");
    } else {
        result.textContent = `${rawInput.charAt(0).toUpperCase() + rawInput.slice(1)} ${verb} not recommended for canine consumption.`;
        result.classList.add("not-recommended");
        result.classList.remove("safe-food");
    }
}

let $inputElement = $("#userName");
$inputElement.on("keyup", function (event) {
    if (event.key === "Enter") {
        checkFoodSafety();
    }
});

