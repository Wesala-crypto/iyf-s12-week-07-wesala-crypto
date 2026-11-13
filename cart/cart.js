const STORAGE_KEY = "iyf_market_basket";
const products = [
    { id: 1, name: "Mandazi (pack of 6)", price: 120 },
    { id: 2, name: "Chapati (pack of 5)", price: 150 },
    { id: 3, name: "Tea leaves 250g", price: 180 },
];
const state = { cart: loadCart() };

function loadCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        if (!Array.isArray(savedCart)) {return [];}
        return savedCart.filter((item) =>
            products.some((product) => product.id === item.productId) &&
            Number.isInteger(item.quantity) && item.quantity > 0
        );
    } catch {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    } catch {
        // The cart remains usable for the current page session.
    }
}

function addToCart(productId) {
    const existingItem = state.cart.find((item) => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ productId, quantity: 1 });
    }
    saveCart();
    renderCart();
}

function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    state.cart = state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
    );
    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter((item) => item.productId !== productId);
    saveCart();
    renderCart();
}

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const product = products.find((entry) => entry.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

function getCartCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function renderProducts() {
    const productsContainer = document.querySelector("#products");
    products.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product";
        const name = document.createElement("h3");
        name.textContent = product.name;
        const price = document.createElement("p");
        price.textContent = `KSh ${product.price}`;
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Add to cart";
        button.addEventListener("click", () => addToCart(product.id));
        card.append(name, price, button);
        productsContainer.append(card);
    });
}

function renderCart() {
    const cartContainer = document.querySelector("#cart-items");
    cartContainer.replaceChildren();
    state.cart.forEach((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        const row = document.createElement("div");
        row.className = "cart-row";
        const name = document.createElement("span");
        name.textContent = `${product.name} — KSh ${product.price * item.quantity}`;
        const controls = document.createElement("div");
        controls.className = "quantity";
        const minus = document.createElement("button");
        minus.type = "button";
        minus.textContent = "−";
        minus.setAttribute("aria-label", `Decrease ${product.name} quantity`);
        minus.addEventListener("click", () => updateQuantity(product.id, item.quantity - 1));
        const quantity = document.createElement("span");
        quantity.textContent = String(item.quantity);
        const plus = document.createElement("button");
        plus.type = "button";
        plus.textContent = "+";
        plus.setAttribute("aria-label", `Increase ${product.name} quantity`);
        plus.addEventListener("click", () => updateQuantity(product.id, item.quantity + 1));
        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "Remove";
        remove.addEventListener("click", () => removeFromCart(product.id));
        controls.append(minus, quantity, plus, remove);
        row.append(name, controls);
        cartContainer.append(row);
    });
    document.querySelector("#cart-count").textContent = `${getCartCount()} items`;
    document.querySelector("#cart-total").textContent = `KSh ${getCartTotal().toLocaleString("en-KE")}`;
}

document.querySelector("#clear-cart").addEventListener("click", () => {
    state.cart = [];
    saveCart();
    renderCart();
});

renderProducts();
renderCart();
