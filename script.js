document.getElementById("subsribe").addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const successMessage = document.getElementById("success");
    const card = document.getElementById("card");
    const emailValue = emailInput.value;

    // Regular expression for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        // Show error message if email field is empty
        errorEmail.textContent = "Email field cannot be empty.";
    } else if (!emailPattern.test(emailValue)) {
        // Show error message if email format is invalid
        errorEmail.textContent = "Please enter a valid email address.";
    } else {
        // Clear error message and email field if email format is valid
        errorEmail.textContent = "";
        emailInput.value = ""; // Clear the email field
        successMessage.style.display = "block";
        card.style.display = "none";
    }
});

// Dismiss success message on clicking the dismiss button
document.querySelector(".registerBtn").addEventListener("click", function () {
    const successMessage = document.getElementById("success");
    const card = document.getElementById("card");
    successMessage.style.display = "none";
    card.style.display = "block";
});


window.addEventListener("click", function (event) {
    const success = document.getElementById("success");
    if (event.target === success) {
        success.style.display = "none";
    }
})


