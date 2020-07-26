//proxy is used to wrap an object 
//and it will take control over the object
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    email: "john.doe@example.com"
}

const handler = {
    get(target, property) {
        console.log(`property ${property} has been read`);
        return target[property];
    },
    set(target, property, value) {
        // if (property == "firstName" && value != "John")
        throw new TypeError("cannot be modified...");
    }
}

let proxy = new Proxy(user, handler);
console.log(proxy.age = 30);
// console.log(proxy.lastName = "Lazarus");
console.log(user.firstName = "Sam")