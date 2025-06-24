const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");

let total = 0;
cartItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "category-box";
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="removeItem(${index})" class="btn">Remove</button>
  `;
  cartDiv.appendChild(div);
  total += item.price;
});

totalSpan.innerText = total;

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
}
