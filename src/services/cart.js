// What actions my cart can do

// Use cases
// ✅ -> add an item to cart
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calculate the cart total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n 🛒 TOTAL: ${result}`);
}

//  -> remove item from cart
async function removeItem(userCart, item) {

  // 1. Found the item index
  const indexFound = userCart.findIndex((product) => product.name === item.name);

  // 2. If the index is not found
  if (indexFound === -1) {
    console.log('item não encontrado');
    return;
  }

  // 3. if the item is found, substract an item 
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // 4. if we only have 1 item, delete the item from the cart
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ -> delete items from cart
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function displayCart(userCart) {
  console.log('\nShopee Cart list:')
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart
}