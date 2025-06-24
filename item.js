const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const product = {
  1: { name: "Smartphone", price: 9999, image: "https://via.placeholder.com/300", desc: "Affordable and powerful." },
  2: { name: "Headphones", price: 2499, image: "https://via.placeholder.com/300", desc: "Crystal clear sound." },
  3: { name: "Laptop", price: 45999, image: "https://via.placeholder.com/300", desc: "Powerful for all tasks." },
}[id];

const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `
    <img src="${product.image}" style="max-width:300px;" />
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p><strong>₹${product.price}</strong></p>
    <button onclick="addToCart(${id})" class="btn">Add to Cart</button>
  `;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
