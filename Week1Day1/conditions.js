//SwitchCase

let ratings = 5;
switch (ratings) {
    case 5: console.log("Great Food..");
        break;
    case 4: console.log("Good Food..");
        break;
    case 3: console.log("Ok Food..");
        break;
    case 2: console.log("Bad Food..");
        break;
    case 1: console.log("Worst Food..");
        break;
    default:
        console.log("Please rate between 1 to 5");
}

//if - else , switchCase
let ratings = 2;
if (ratings > 3) {
    console.log("Great Food...");
} else if (ratings == 3) { // ==  check for the value
    console.log("Ok Food");
} else {
    console.log("Bad Food");
}