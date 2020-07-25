//exception handling

function handleException(round) {
    try {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } catch (error) {
        console.error("Range Issue");
    } finally {
        console.log("I'm Done");
    }
}
handleException(102);

/* function handleException(round) {
    if (round >= 0 && round <= 100) {
        let pi = 3.14159;
        console.log(pi.toFixed(round));
    } else {
        throw new CustomException();
    }
}


class CustomException {
    constructor() {
        console.log("The range of the value should be between 0 and 100");
    }
}
handleException(102);
 */