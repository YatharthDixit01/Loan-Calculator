let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const loanAmount = parseFloat(document.querySelector("#loanAmt").value);
  const interestRate = parseFloat(document.querySelector("#interest").value);
  const loanTerm = parseFloat(document.querySelector("#timeperiod").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid values in all the fields");
  }

  const monthlyInterest = interestRate / 100 / 12; //converting annual interest rate into monthly interest rate
  const totalPayments = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayments));

  const totalInterest = monthlyPayment * totalPayments - loanAmount;

  const totalAmountPaid = monthlyPayment * totalPayments;

  displayResult(monthlyPayment, totalInterest, totalAmountPaid);
});

function displayResult(monthlyPayment, totalInterest, totalAmountPaid) {
  let resultDiv = document.querySelector(".result");

  resultDiv.innerHTML = `<b> <p>Monthly Payment ${monthlyPayment.toFixed(2)}</p>
  <p>Total Interest ${totalInterest.toFixed(2)}</p> 
  <p>Total Amount Paid: ${totalAmountPaid.toFixed(2)}</p></b>`;
}
