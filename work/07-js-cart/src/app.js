import { render, renderViewCartButton, renderCart, hideCart, showCart } from './render.js';
import { products } from './products.js'

let cart = [];

const productEl = document.querySelector('.product-page');
productEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const id = e.target.dataset.id;
        handleAddToCart(id);
    } else if (e.target.classList.contains('view-cart-btn')) {
        renderCart(cart);
        showCart(cart);
    }
});

const cartEl = document.querySelector('.cart');
cartEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const id = e.target.dataset.id;
        updateQuantity(id, 0);
    } else if (e.target.classList.contains('hide-cart-btn')) {
        hideCart();
    } else if (e.target.classList.contains('checkout-btn')) {
        clearCart();
        hideCart();
        renderCart(cart);
        renderViewCartButton(cart);
    }else if(e.target.classList.contains('quantity')) {
        const id = parseInt(e.target.dataset.id, 10);
        const newQuantity = parseInt(e.target.value, 10);
        updateQuantity(id, newQuantity);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    render(products);
    renderViewCartButton(cart);
});

const handleAddToCart = (product) => {
    addProductToCart(product);
    renderCart(cart);
    renderViewCartButton(cart);
};

const addProductToCart = (productId) => {
    const product = products.find(p => p.id == productId);
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart(cart);
    renderViewCartButton(cart);
};

const updateQuantity = (productId, newQuantity) => {
    const productIndex = cart.findIndex(item => item.id == productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity = newQuantity;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
        renderCart(cart);
        renderViewCartButton(cart);
    }
};

const clearCart = () => {
    cart = [];
};