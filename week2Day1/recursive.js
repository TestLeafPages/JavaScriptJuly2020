//recursive function

var dosa = 0;

function cookDosa(count) {
    if (count == 0) {
        console.log(dosa + " Dosa is ready..");
    } else {
        dosa++;
        return cookDosa(count - 1);
    }
}
cookDosa(3);

