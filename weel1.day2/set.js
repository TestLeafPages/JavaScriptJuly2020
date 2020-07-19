// Set in JS
let dishes = new Set();

// to add elements inside the set
dishes.add("Mushoorm Soup");
dishes.add("Veg friedrice");
dishes.add("Gobi Manuchurian");
dishes.add("Veg friedrice");

// size
// console.log(dishes.size)

// to remove or delete
// dishes.delete("Veg friedrice")
// dishes.clear()

dishes.forEach(eachDish => {
    console.log(eachDish);
})