document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        calculateTax();
    });
});

function calculateTax() {

    var grossIncomeValue = parseFloat(document.getElementById("grossIncome").value.trim());
    var extraIncomeValue = parseFloat(document.getElementById("extraIncome").value.trim());
    var ageValue = document.getElementById("age").value;
    var deductionsValue = parseFloat(document.getElementById("deductions").value.trim());

    let isValid = true;

    // Check for errors
    if (isNaN(grossIncomeValue)) {
        setError(document.getElementById("grossIncome"), "Invalid input. Please enter numeric values only.");
        isValid = false;
    }
    else{
        setSuccess(document.getElementById("grossIncome"));
    }
    
    if (isNaN(extraIncomeValue)) {
        setError(document.getElementById("extraIncome"), "Invalid input. Please enter numeric values only.");
        isValid = false;
    }
    else{
        setSuccess(document.getElementById("extraIncome"));
    }
    
    if (isNaN(deductionsValue)) {
        setError(document.getElementById("deductions"), "Invalid input. Please enter numeric values only.");
        isValid = false;
    }
    else{
        setSuccess(document.getElementById("deductions"));
    }
    
    if (ageValue === "age") {
        setError(document.getElementById("age"), "Please select an age group.");
        isValid = false;
    }
    else{
        setSuccess(document.getElementById("age"));
    }

    // Proceed only if form is valid
    if (isValid) {
        var overallIncome = grossIncomeValue + extraIncomeValue - deductionsValue;

        // Calculate tax
        var tax = 0;
        if (overallIncome <= 800000) {
            tax = 0;
        } else {
            var incomeOver8Lakhs = overallIncome - 800000;
            if (ageValue === "under40") {
                tax = 0.3 * incomeOver8Lakhs;
            } else if (ageValue === "between40and60") {
                tax = 0.4 * incomeOver8Lakhs;
            } else if (ageValue === "age") {
                tax = 0.1 * incomeOver8Lakhs;
            }
        }

        // Show modal with tax calculation
        showModal(tax.toFixed(2));
    }
}


function showModal(tax) {
    var modal = new bootstrap.Modal(document.getElementById("taxModal"), {});
    var modalBody = document.getElementById("modalBody");
    modalBody.innerText = "Tax to be paid: " + tax;
    modal.show();
}

function setError(inputElement, message) {
    var parentBox = inputElement.parentElement;
    parentBox.className = "input-field error";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-exclamation-circle";
    fa.setAttribute("data-bs-title", message);
    fa.setAttribute("data-bs-toggle", "tooltip");

    new bootstrap.Tooltip(fa);
}


function setSuccess(inputElement) {
    var parentBox = inputElement.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
}
