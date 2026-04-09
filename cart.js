const cart = JSON.parse(localStorage.getItem('cart')) || [];
const list = document.querySelector('#products');
const totalPriceSpan = document.querySelector('#totalPrice');

console.log('Cart data:', cart);

function fillCartList(){
    let totalPrice = 0;
    
cart.forEach(element => {
    let row = document.createElement('tr');

    const itemTotal = element.amount * element.price;
    totalPrice += itemTotal;

    row.innerHTML = `
        <td>${element.name}</td>
        <td>
        <button class="change-amount-btn" onclick="ChangeAmount('${element.name}', -1)">-</button>
        ${element.amount}
        <button class="change-amount-btn" onclick="ChangeAmount('${element.name}', 1)">+</button>
        </td>
        <td>${itemTotal} €</td>
    `;

    list.appendChild(row);
});
    
    totalPriceSpan.textContent = totalPrice;
}
fillCartList();

function ChangeAmount(name, change){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let index = cart.findIndex((element) => element.name === name);

    if(index >= 0) {
        cart[index].amount += change;

        if(cart[index].amount <= 0) {
            cart.splice(index, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}