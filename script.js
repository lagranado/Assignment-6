let cartItems = [];
let total = 0;
let shipping = 5;

function addToCart(itemName, price) {
  cartItems.push({ itemName, price: parseFloat(price) }); 
  updateCart();
}

function addDonation() {
    const donationAmount = parseFloat(document.getElementById('donation').value);
    if (!isNaN(donationAmount) && donationAmount > 0) {
        total += donationAmount;
        updateSummary();
    } else {
      alert('Please enter a valid donation amount.');
    }
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    const fixedCartDiv = document.getElementById('fixedCart');
    cartDiv.innerHTML = '';
    fixedCartDiv.innerHTML = '';
    cartItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.itemName}: $${item.price}`;
        cartDiv.appendChild(p);
        fixedCartDiv.appendChild(p.cloneNode(true));
    });

    if (cartItems.length === 0) {
        cartDiv.innerHTML = '<p>No items in cart.</p>';
        fixedCartDiv.innerHTML = '<p>No items in cart.</p>';
    }

    updateSummary();
}

function updateSummary() {
    total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const grandTotal = total + shipping;

    document.getElementById('total').innerHTML = `
        <p>Total Price: $${total.toFixed(2)}</p>
        <p>Shipping: $${shipping.toFixed(2)}</p>
        <p>Grand Total: $${grandTotal.toFixed(2)}</p>
    `;
}


document.getElementById('regForm').addEventListener('submit', function(event) {
  event.preventDefault();  

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  console.log('Registration Details:', name, email); 

  alert('Thank you for registering, ' + name + '!');
});

updateCart();
