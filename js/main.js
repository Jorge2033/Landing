// Main JavaScript for the page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission
      alert('Your form has been submitted successfully!');
    });
  });
// Get existing elements
let boton = document.querySelector("#menu-btn")
let skill = document.querySelector("#link-skills")
let proyect = document.querySelector("#link-proyect")
let education = document.querySelector("#link-education")
let participation = document.querySelector("#link-participation")
let contact = document.querySelector("#link-contact")
let navLinks = document.querySelector("#navbar")

// Get form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const reasonInput = document.querySelector('#reason');
const submitButton = document.querySelector('#enviar');

// Array of links to toggle the menu
let array = [boton, skill, proyect, education, participation, contact];

// Toggle the menu on menu button click
boton.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

// Close the menu when a link is clicked
for (const elemento of array) {
    elemento.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu'); // Close the menu
    })
}

// Form submission handling with shake effect if fields are empty
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

// Shake animation function
const shakeForm = () => {
    form.classList.add('shake');
    setTimeout(() => {
        form.classList.remove('shake');
    }, 500); // Duration of shake effect
};
