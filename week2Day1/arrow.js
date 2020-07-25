//Arrow functions
let foodItems = [
    { name: "Idly", type: "veg", price: 20, when: "Dinner" },
    { name: "dosa", type: "veg", price: 50, when: "Dinner" },
    { name: "chiken Soup", type: "nonVeg", price: 100, when: "Lunch" },
    { name: "Adai", type: "veg", price: 20, when: "Evening" },
    { name: "mutton fry", type: "nonVeg", price: 120, when: "Dinner" },
];

let vegDinnerPrice = foodItems.filter(food => {
    return food.when == "Dinner";
}).filter(food => {
    return food.type == "veg";
}).map(food => {
    return food.price;
}).reduce((previous, price) => {
    return previous + price;
})

console.log(vegDinnerPrice);