let restaurant = new Map();
// console.log(restaurant.size)

// Adding data in the map
restaurant.set(600006, "Seashell");     // Entryset
restaurant.set(600042, restaurant);
restaurant.set(600007, "KFC");
restaurant.set(600008, "Random");

for (let kitchen of restaurant.values()) {
    // console.log(kitchen)
}

// detele an entryset in map
restaurant.delete(600008)

// has (to check)
// console.log(restaurant.has(600008))

// to pick a particular item / value 
// console.log(restaurant.get(600007));
// console.log(restaurant.size)
// to clear the map
// restaurant.clear()

// console.log(restaurant.size)

restaurant.forEach((value,key) => {
    console.log(value+" "+key)
})

