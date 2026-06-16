// Input: Shopping cart data
const cartItems = [
  { product: "Laptop", price: 1000, quantity: 1 },
  { product: "Mouse", price: 50, quantity: 2 },
  { product: "Keyboard", price: 120, quantity: 1 }
];

let tax_rate = 0.10;
const result = cartItems.reduce((act,qua) => act + (qua.price * qua.quantity), 0)
const grand = result * ( 1 + tax_rate)
console.log(grand);

