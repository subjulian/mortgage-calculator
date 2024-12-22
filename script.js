document.getElementById('btn-calculate').addEventListener('click', function(event) {
    var inputs = document.querySelectorAll('input');
    var valido = true;
    inputs.forEach(function(input) {
        if (input.value === '') {
            valido = false;
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
    });
    if (!valido) {
        event.preventDefault();
    } else {
        var mortgageAmount = parseFloat(document.getElementById('mortgage-amount').value);
        var years = parseFloat(document.getElementById('years').value);
        var interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
        var monthlyRate = interestRate / 12;
        var numPay = years * 12;
        var monthlyPayment = (mortgageAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPay));
        var total = monthlyPayment * numPay;
        document.getElementById('monthly-repayment').innerHTML = '£' + monthlyPayment.toFixed(2);
        document.getElementById('total-repayment').innerHTML = '£' + total.toFixed(2);
        document.getElementById('result-empty').style.display = 'none';
        document.getElementById('result-complete').style.display = 'block';
    }   
});

document.getElementById('btn-clear').addEventListener('click', function() {
    location.reload();
});


