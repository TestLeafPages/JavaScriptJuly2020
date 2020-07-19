// base or parent class
class Anjappar {

    constructor(time){
        this.time = time;
        console.log("Welcome to Anjappar, the time is "+time);
    }

    briyani = ["Chicken", "Mutton", "Prawn", "Fish", "Egg", "Veg"];
    sundayDiscount = 10;
    static covidTips = 50;

    getBriyaniVaraities(){
        return this.briyani;
    } 

    static getCovidTips(){
        return this.covidTips;
    }

}
// sub or child class
class Anjappar_ParkTown extends Anjappar {

    constructor(time){
        super(time)
    }

    static getCovidTips(){
        return super.covidTips + 10;
    }

}

class Anjappar_Velachery extends Anjappar{

}

var branch = new Anjappar_Velachery("10 AM");
console.log(branch.getBriyaniVaraities());
console.log(Anjappar_ParkTown.getCovidTips());