document.addEventListener('DOMContentLoaded', function() {
 
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const trashButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
    const quantitySpans = document.querySelectorAll('.quantity');
    const unitPrices = document.querySelectorAll('.unit-price');
    const totalPriceSpan = document.querySelector('.total');

  
    function calculateTotal() {
        let total = 0;
        quantitySpans.forEach((span, index) => {
            const quantity = parseInt(span.textContent);
            const price = parseFloat(unitPrices[index].textContent);
            total += quantity * price;
        });
        totalPriceSpan.textContent = total + ' $';
    }

  
    plusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantitySpans[index].textContent);
            quantity++;
            quantitySpans[index].textContent = quantity;
            calculateTotal();
        });
    });


    minusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantitySpans[index].textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpans[index].textContent = quantity;
                calculateTotal();
            }
        });
    });

   
    trashButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card-body');
            cardBody.style.display = 'none';
            quantitySpans[index].textContent = '0';
            calculateTotal();
        });
    });

    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.style.color = 'red';
            } else {
                this.style.color = 'black';
            }
        });
    });

    calculateTotal();
});
