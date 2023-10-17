const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("main-nav");

menuToggle.addEventListener("click", function() {
    navList.classList.toggle("active");
});


const elementoAnimado = document.querySelector(".blur-in-expand");

const options = {
  root: null, // Usar el viewport como el contenedor de referencia
  rootMargin: "0px", // Margen alrededor del viewport
  threshold: 0.5, // Cuando al menos el 50% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      elementoAnimado.classList.add("iniciar-animacion");
      observer.unobserve(entry.target); // Dejar de observar una vez que se inicia la animación
    }
  });
}, options);

// Comenzar a observar el elemento
observer.observe(elementoAnimado);
