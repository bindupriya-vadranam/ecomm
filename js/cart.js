const cartItemsContainer = document.getElementById("cartItems");
const totalAmountElement = document.getElementById("totalAmount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

if(cart.length === 0){
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  totalAmountElement.innerHTML = "Total: ₹0";
}
else{

  cart.forEach(id => {

    const product = products.find(p => p.id == id);

    if(product){
      total += product.price;

      cartItemsContainer.innerHTML += `
        <div class="cart-card">
          <img src="${product.image}" class="cart-img">
          <div class="cart-info">
            <h4>${product.name}</h4>
            <p>₹${product.price}</p>
            <button onclick="removeFromCart(${product.id})" class="btn">
              Remove
            </button>
          </div>
        </div>
      `;
    }

  });

  totalAmountElement.innerHTML = "Total: ₹" + total;
}

function removeFromCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(item => item != id);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
}
function goToCheckout(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }

  window.location.href = "checkout.html";
}