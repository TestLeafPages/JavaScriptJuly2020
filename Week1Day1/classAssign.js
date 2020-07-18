let str = "Welcome to Chennai";
let StrArray = str.split(" ");

for (let index = StrArray.length - 1; index >= 0; index--) {
    console.log(StrArray[index]);
    // process.stdout.write(StrArray[index]);
}