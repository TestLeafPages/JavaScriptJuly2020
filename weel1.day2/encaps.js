class OrderFood{

    // Private variable
    #orderId;

    // Object inside the class
    orderItems = {
        1: "Dosa",
        2: "Puri",
        2: "Vada"
    }

    // getter & setter
    getOrder(){
        return this.#orderId;
    }

    setOrder(order){
        this.#orderId = order;
    }

}

const details = new OrderFood();
details.setOrder(1004);
console.log(details.getOrder());