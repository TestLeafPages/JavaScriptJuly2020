// learn Objects

var orderItems = {
    hotel : "Shanti Sagar",
    item1 : "Idly",
    item2 : "Poori",
    item3 : "Dosa",
    item4 : "Vada",

    address : [
        {
            headOffice : "Mumbai"
        },
        {
            permanent : "Chennai"
        },
        {
            temporary : "Bangalore"
        }
    ]

}

console.log(orderItems.address[1].temporary);