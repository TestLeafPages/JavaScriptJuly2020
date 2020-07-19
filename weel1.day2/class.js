// Classes

class Kitchen {

    
    chefName = "Gordon";
    employeeCount = 40;
    isVeg = true;

    // method
    getChefName(){
        return this.chefName;
    }

}

let hotel = new Kitchen();
console.log(hotel.chefName);
console.log(hotel.getChefName());

