//callback functions - function will be executed after another function is executed
/* 
    sam bank balance - 5000
    sam borrowed money from babu - 10000
    bowya borrowed 5000 from sam
    sam give to babu a check 
*/

function credit(creditAmount, result) {
    setTimeout(() => {
        result(creditAmount);
    }, 3000);
}

function debit(debitAmount) {
    return debitAmount;
}
            //function passed as an argument
credit(5000, (amount) => {
    console.log(`Amount of ${amount} credited to the account`);
    console.log(`Amount of ${debit(10000)} has been debited`);
});
