// Main JavaScript for the page
document.addEventListener('DOMContentLoaded', function () {
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

    // Add an event listener for form submission
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form
        if (!emailInput.value || !reasonInput.value) {
            shakeForm(); // Trigger shake animation
            return;
        }

        console.log('Form submitted:', {
            email: emailInput.value,
            reason: reasonInput.value,
        });

        // POST request to simulate form submission
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailInput.value,
                    reason: reasonInput.value,
                }),
            });

            if (response.ok) {
                alert("¡Formulario enviado con éxito!");
                emailInput.value = '';
                reasonInput.value = '';
            } else {
                alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    });

    // GET request to fetch and display products dynamically
    const productsSection = document.getElementById('products');
    if (productsSection) {
        fetchProducts(productsSection);
    }
});

// Function to fetch and display products dynamically
async function fetchProducts(productsSection) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const products = await response.json();

        products.forEach((product) => {
            const productHTML = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.body}</p>
                        </div>
                    </div>
                </div>
            `;
            productsSection.innerHTML += productHTML;
        });
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}
