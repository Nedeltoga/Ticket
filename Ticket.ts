interface Product {
  product: string;
  type: string;
  quantity: number;
  unitPrice: number;
}

const order = [
  { product: "water", type: "drinks", quantity: 10, unitPrice: 1 },
  { product: "chicken wings", type: "food", quantity: 3, unitPrice: 5 },
  { product: "steak", type: "food", quantity: 1, unitPrice: 9 },
  { product: "coffee", type: "drinks", quantity: 4, unitPrice: 2 },
  { product: "wine bottle", type: "drinks", quantity: 1, unitPrice: 7 },
];

function getTicket(order: Product[]) {
  console.log("Uds", "Producto","Precio", "Importe")
  let ticketPrice = order.reduce((sum, item)=>{
    let itemPrice = item.quantity * item.unitPrice
    console.log(item.quantity,  item.product,  item.unitPrice, itemPrice); 
    return sum + itemPrice
  }, 0)
  console.log("Total", ticketPrice)
}

getTicket(order);
