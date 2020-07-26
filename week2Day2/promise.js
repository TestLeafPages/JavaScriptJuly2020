//Promise - resolve(positive), reject(negative)

let isDosaAvailable = true;

let p = new Promise((resolve, reject) => {
    if (isDosaAvailable) {
        resolve("Available");
    } else {
        reject("UnAvailable");
    }
})

// positive flow - then
// negative flow - catch
//chaining 

p.then((message) => {
    console.log("Yes " + message);
    return message;
}).then((message) => {
    console.log("Dosa " + message + " is Served");
}).catch((message) => {
    console.log("Couldn't serve Dosa " + message);
})