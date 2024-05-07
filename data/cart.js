export const cart = [];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
   if (productId === cartItem.productId) {
     matchingItem = cartItem;
   }
  });

  const productQuantity = document.querySelector(`
 .js-quantity-selector-${productId}`);
 const Quantity = Number(productQuantity.value);

  if (matchingItem) {
   matchingItem.quantity += Quantity;
  } else {
   cart.push({
     productId: productId,
     quantity: Quantity
    })
  }
}
