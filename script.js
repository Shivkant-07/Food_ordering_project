let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, button) {

let item = cart.find(i => i.name === name);

if (item) {
item.quantity++;
} else {
cart.push({ name, price, quantity: 1 });
}

localStorage.setItem("cart", JSON.stringify(cart));

button.innerText = "Added ✓";
button.classList.add("added");

setTimeout(() => {
button.innerText = "Add to Cart";
button.classList.remove("added");
},1500);

}

function displayCart() {

let container = document.getElementById("cartContainer");

if (!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach((item, index) => {

let div = document.createElement("div");

div.className = "cartItem";

div.innerHTML = `

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="qty">

<button onclick="decrease(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${index})">+</button>

</div>

<button class="removeBtn" onclick="removeItem(${index})">Remove</button>

`;

container.appendChild(div);

total += item.price * item.quantity;

});

let totalElement = document.getElementById("totalPrice");

if(totalElement){
totalElement.innerText = "Total: ₹" + total;
}

}

function increase(index) {

cart[index].quantity++;

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}

function decrease(index) {

if (cart[index].quantity > 1) {
cart[index].quantity--;
}

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}

function removeItem(index) {

cart.splice(index, 1);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}

displayCart();