let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function updateTotals() {
    let totalsWrapper = document.querySelector(".content-checkout .totals-wrapper");

    let sum1 = 0.0;
    cartItems.forEach(item => {
        sum1 += item.price * item.quantity;
    });
    sum1 = Number(sum1.toFixed(2));

    let shipping = 2.0;

    let discount = 10.2;

    let total = Number((sum1 + shipping - discount).toFixed(2));

    totalsWrapper.innerHTML =
        `
        <div class="subtotal flex-row-gap-0">
            <p>Subtotal</p>
            <p class="price">$<span>${sum1}</span></p>
        </div>
        <div class="shipping flex-row-gap-0">
            <p>Shipping</p>
            <p class="price">$<span class="shipping">${shipping}</span></p>
        </div>
        <div class="discount flex-row-gap-0">
            <p>Discount</p>
            <p class="price">-$<span class="discount">${discount}</span></p>
        </div>
        <hr>
        <div class="total flex-row-gap-0">
            <p class="title">Total</p>
            <p class="price">$<span>${total}</span></p>
        </div>
        <button id="btn-payment">Proceed to payment</button>
    `;
}

updateTotals();