document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.list-products');
    const totalPriceElement = document.querySelector('.total');

    const updateTotalPrice = () => {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            const price = parseInt(item.querySelector('.unit-price').innerText.replace('$', ''));
            total += quantity * price;
        });
        totalPriceElement.innerText = `${total} $`;
    };

    cartContainer.addEventListener('click', (event) => {
        const target = event.target;
        const cardBody = target.closest('.card-body');

        if (target.classList.contains('fa-plus-circle')) {
            const quantityElement = cardBody.querySelector('.quantity');
            quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
            updateTotalPrice();
        }

        if (target.classList.contains('fa-minus-circle')) {
            const quantityElement = cardBody.querySelector('.quantity');
            const newQuantity = parseInt(quantityElement.innerText) - 1;
            if (newQuantity >= 0) {
                quantityElement.innerText = newQuantity;
                updateTotalPrice();
            }
        }

        if (target.classList.contains('fa-trash-alt')) {
            cardBody.parentElement.remove();
            updateTotalPrice();
        }

        if (target.classList.contains('fa-heart')) {
            target.classList.toggle('text-danger');
        }
    });

    // Initial calculation of total price
    updateTotalPrice();
});
