// Ejemplo de productos
const products = [
    { id: 1, name: "Smartphone XYZ", price: 299.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop ABC", price: 899.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Auriculares QWE", price: 49.99, image: "https://via.placeholder.com/150" },
    // Más productos...
];

let cart = [];

function loadMoreProducts() {
    const container = document.getElementById("products-container");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        container.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} ha sido agregado al carrito.`);
}

function toggleCartDetails() {
    const cartDetails = document.getElementById("cart-details");
    const isOpen = cartDetails.getAttribute("aria-hidden") === "false";
    cartDetails.setAttribute("aria-hidden", !isOpen);
    if (!isOpen) {
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    });
}

function checkout() {
    alert("Procediendo al pago...");
    // Aquí iría la lógica de pago
}

// Cargar productos inicialmente
loadMoreProducts();
