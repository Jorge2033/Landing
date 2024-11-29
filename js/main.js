
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const reasonInput = document.querySelector('#reason');

    
    const shakeForm = () => {
        form.classList.add('shake');
        setTimeout(() => {
            form.classList.remove('shake');
        }, 500); 
    };

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); 

        
        if (!emailInput.value || !reasonInput.value) {
            shakeForm(); 
            return;
        }

        console.log('Form submitted:', {
            email: emailInput.value,
            reason: reasonInput.value,
        });

        
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

    
    const productsSection = document.getElementById('products');
    if (productsSection) {
        fetchProducts(productsSection);
    }
});

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
