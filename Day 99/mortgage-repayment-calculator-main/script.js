document.getElementById('calculate').addEventListener('click', function() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const type = document.getElementById('type').value;
  
    if (isNaN(amount) || isNaN(term) || isNaN(rate)) {
      alert('Please enter valid numbers for amount, term, and rate.');
      return;
    }
  
    let monthlyRepayment;
    let totalRepayment;
  
    if (type === 'repayment') {
      const monthlyRate = rate / 100 / 12;
      const numberOfPayments = term * 12;
      monthlyRepayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      totalRepayment = monthlyRepayment * numberOfPayments;
    } else if (type === 'interest-only') {
      monthlyRepayment = (amount * (rate / 100)) / 12;
      totalRepayment = (monthlyRepayment * 12) * term + amount;
    }
  
    // Update the results
    document.getElementById('monthly-repayments').textContent = `£${monthlyRepayment.toFixed(2)}`;
    document.getElementById('total-repayment').textContent = `£${totalRepayment.toFixed(2)}`;
  });