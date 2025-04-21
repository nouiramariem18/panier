document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments nécessaires
    const quantityMinusButtons = document.querySelectorAll('.minus-btn');
    const quantityPlusButtons = document.querySelectorAll('.plus-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const quantityInputs = document.querySelectorAll('.quantity');
    const priceElements = document.querySelectorAll('.price');
    const totalPriceElement = document.getElementById('total-price');
    
   
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            if (!item.classList.contains('removed')) {
                const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
                const quantity = parseInt(item.querySelector('.quantity').value);
                total += price * quantity;
            }
        });
        totalPriceElement.textContent = '$' + total.toFixed(2);
    }
    

    quantityMinusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 1) {
                value--;
                input.value = value;
                calculateTotal();
            }
        });
    });
    

    quantityPlusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            value++;
            input.value = value;
            calculateTotal();
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.item');
            item.classList.add('removed');
            item.style.display = 'none';
            calculateTotal();
        });
    });
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 1) this.value = 1;
            calculateTotal();
        });
    });
    
    
    calculateTotal();
});