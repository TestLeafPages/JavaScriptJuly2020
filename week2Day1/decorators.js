//Decorators

function cookFood(menu) {
    console.log(`Menu Item: ${menu} has been cooked and delivered...`);
    return menu;
}
                //callback function
function findFood(func) {
    let cookOnce = new Map();
    return menu => {
        //check the item in map
        if (cookOnce.has(menu)) {
            console.log("Just Delivered");
            //if present and get it from and return
            return cookOnce.get(menu);
        }
        //else call the function cookFood 
        //in the name of the parameter func
        let result = func(menu);
        console.log("result from cookfood " + result);
        //get from cookFood and set it to map
        cookOnce.set(menu, result);
        return result;
    }
}

cookFood = findFood(cookFood);
cookFood("Idly");
cookFood("Idly");
cookFood("Dosa");
cookFood("Dosa");
cookFood("Dosa");
