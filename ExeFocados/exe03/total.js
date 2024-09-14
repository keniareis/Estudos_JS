const orders = [
    {
        id: 1,
        items: [
            { name: 'Notebook', quantity: 2, price: 2000 },
            { name: 'Mouse', quantity: 1, price: 50 }
        ]
    },
    {
        id: 2,
        items: [
            { name: 'PC', quantity: 1, price: 4000 },
            { name: 'Monitor', quantity: 1, price: 840 }
        ]
    }
];

function getTotalAmount(order){ 
    return orders[0].items.reduce((acc, item) => acc + (item.quantity  * item.price), 0);
}

console.log(getTotalAmount(orders));


function getAllOrdersTotal(order){
    const total = orders.reduce((acc, order) => {
        const orderTotal = order.items.reduce((orderAcc, item) => {
            return orderAcc + (item.quantity * item.price);
        }, 0);
        return acc + orderTotal;
    }, 0);
    return total;
}

console.log(getAllOrdersTotal(orders));