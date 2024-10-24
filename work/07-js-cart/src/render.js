const render = (products) => {
    const productPageHtml = products.map(product => `
        <li>
            <img src="http://placekitten.com/150/150?image=${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </li>
    `).join('');
    const appPage = `
    <ul>
    ${productPageHtml}
    </ul>
    <button class="view-cart-btn">View Cart (0)</button>
    `;

    document.querySelector('.product-page').innerHTML = appPage;
};

const hideCart = () => {
    const viewCartBtn = document.querySelector('.view-cart-btn');
    const cart = document.querySelector('.cart');
    cart.style.display = 'none';
    viewCartBtn.style.display = 'block';
}

const showCart = () => {
    const viewCartBtn = document.querySelector('.view-cart-btn');
    const cart = document.querySelector('.cart');
    cart.style.display = 'block';
    viewCartBtn.style.display = 'none';
}

const renderCart = (cart) => {
    const cartPage = document.querySelector('.cart');

    if (!cart.length) {
        cartPage.innerHTML = '<p>Nothing in the cart</p>';
        return;
    }

    const cartItemsHtml = cart.map(item => `
        <div class="cart-item">
            <img src="http://placekitten.com/50/50?image=${item.image}" alt="${item.name}">
            <p>${item.name} - $${(item.price).toFixed(2)} x 
                <input type="number" value="${item.quantity}" min="0" class="quantity" data-id="${item.id}">
                = $${(item.price * item.quantity).toFixed(2)}
            </p>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
    `).join('');

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    cartPage.innerHTML = `
        <h2>Cart</h2>
        ${cartItemsHtml}
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
        <button class="hide-cart-btn">Hide Cart</button>
        <button class="checkout-btn">Checkout</button>
    `;
};

const renderViewCartButton = (cart) => {
    const viewCartBtn = document.querySelector('.view-cart-btn');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    viewCartBtn.textContent = `View Cart (${totalItems})`;
};

export { render, renderCart, renderViewCartButton, hideCart, showCart }