let cart = JSON.parse(localStorage.getItem("cart")) || [];

const wrapper = document.querySelector(".content-checkout .products-wrapper");

function renderCheckoutCart() {
    wrapper.innerHTML = "";

    cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "product-cart flex-row-gap-0";
        row.dataset.id = item.id;

        row.innerHTML =
            `
        <div class="product-picture">
            <div class="picture">
                <img src="${item.image}" alt="Product Image">
            </div>
            <div class="product-quantity">
                <p class="quantity-product">${item.quantity}</p>
            </div>
        </div>
        <div class="product-info">
            <div class="product-name">
                <p class="product-name" style="font-size: 16px">${item.name}</p>
            </div>
            <div class="product-size">Size: <span class="product-size">${item.size}</span></div>
            <div class="product-color">Color: <span class="product-color">${item.color}</span></div>
        </div>
        <div class="product-price price">
            <p style="font-size: 16px">$${item.price}</p>
        </div>
        `;

        wrapper.appendChild(row);
    });
    // updateTotals();
}

renderCheckoutCart();

