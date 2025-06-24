const products = [
  { id: 1, name: "Smartphone", price: 9999, image: "https://via.placeholder.com/150", desc: "Affordable and powerful." },
  { id: 2, name: "Headphones", price: 2499, image: "https://via.placeholder.com/150", desc: "Crystal clear sound." },
  { id: 3, name: "Laptop", price: 45999, image: "https://via.placeholder.com/150", desc: "Powerful for all tasks." },
];

const productGrid = document.getElementById("product-grid");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "category-box";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%;">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <a href="product.html?id=${p.id}" class="btn">View</a>
    <button onclick="addToCart(${p.id})" class="btn">Add to Cart</button>
  `;
  productGrid.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
