// Main JavaScript for the page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission
      alert('Your form has been submitted successfully!');
    });
});
// Form submission handling with shake effect if fields are empty
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const reasonInput = document.querySelector('#reason');
// Shake animation function
const shakeForm = () => {
    form.classList.add('shake');
    setTimeout(() => {
        form.classList.remove('shake');
    }, 500); // Duration of shake effect
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    if (!emailInput.value || !reasonInput.value) {
        shakeForm(); // Trigger shake animation
        return;
    }

    console.log('Form submitted:', {
        email: emailInput.value,
        reason: reasonInput.value
    });

    // Clear the form
    emailInput.value = '';
    reasonInput.value = '';
});