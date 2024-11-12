let ready = () => {
    console.log('DOM está listo')
  
}


let loaded = () => {

    let myform = document.getElementById('form');
          
       myform.addEventListener('submit', (eventSubmit) => {
           eventSubmit.preventDefault(); 
              //asigna la refencia del elemento con la clase form-control-lg a la variable 
           const emailElement = document.querySelector('.form-control-lg');
          // asigna el valor del input a la variable emailtext
           const emailText = emailElement.value;
        // verifica la longitud del emailtext
           if (emailText.length === 0) {
             //si la longitud es 0, lleva el enfoque al elemento
            emailElement.focus()
            emailElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                }
            )
           }
       })
       

}

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)