import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];

console.log(`Welcome to your Shopee cart!`);

// Created 2 items
const item1 = createItem('hotwheels ferrari', 20.99, 1);
const item2 = createItem('hotwheels lamborghini', 39.99, 3);

// Added 2 items to cart
cartService.addItem(myCart, item1);
cartService.addItem(myCart, item2);

cartService.removeItem(myCart, item2);
console.log(myCart.map(item => item.subtotal()));


// Deleted 2 items from cart
// cartService.deleteItem(myCart, item1.name);
// cartService.deleteItem(myCart, item2.name);

cartService.displayCart(myCart);
cartService.calculateTotal(myCart);