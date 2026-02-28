function placeOrder(event){
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;
  const payment = document.getElementById("paymentMethod").value;

  localStorage.removeItem("cart");

  window.location.href = 
    "confirmation.html?name=" + encodeURIComponent(name) +
    "&address=" + encodeURIComponent(address) +
    "&city=" + encodeURIComponent(city) +
    "&pincode=" + encodeURIComponent(pincode) +
    "&payment=" + encodeURIComponent(payment);
}