// PRODUCT DISPLAY
function displayProducts(list){
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p=>{
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>

        <div class="card-buttons">
          <a href="product.html?id=${p.id}">
            <button class="btn view-btn">View</button>
          </a>

          <button onclick="addToCart(${p.id})" class="btn cart-btn">
            Add to Cart
          </button>

          <button onclick="buyNow(${p.id})" class="btn buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    `;
  });
}
function viewProduct(id){
  window.location.href = "product.html?id=" + id;
}

function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(id);   // save only ID

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}
function buyNow(id){
  addToCart(id);
  window.location.href = "cart.html";
}
function filterCategory(category){
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

// FIXED SLIDER IMAGES
const sliderImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
  "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=1600",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600"
];

let slideIndex = 0;

function startSlider(){
  const img = document.getElementById("slideImage");
  if(!img) return;

  img.src = sliderImages[0];

  setInterval(function(){
    slideIndex++;
    if(slideIndex >= sliderImages.length){
      slideIndex = 0;
    }
    img.src = sliderImages[slideIndex];
  }, 3000);
}

window.onload = function(){
  startSlider();
  displayProducts(products);
};
