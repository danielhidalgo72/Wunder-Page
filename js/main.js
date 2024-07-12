document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('menu-icon').addEventListener('click', function() {
        var mobileNav = document.getElementById('mobile-nav');
        mobileNav.classList.toggle('show');
    });
    
    fetch(`../html/nosotros.html`)
        .then(response => response.text())
        .then(data => {
            contenido.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
            contenido.innerHTML = "<p>Hubo un error al cargar el contenido. Por favor, intenta de nuevo.</p>";
        });

    const navContainer = document.querySelector(".nav-container");
    const contenido = document.getElementById("contenido");

    navContainer.addEventListener("click", function(event) {
        const item = event.target;
        if (item.classList.contains("nav-item")) {
            let fileName;
            switch (item.textContent.trim()) {
                case "Nosotros":
                    fileName = "nosotros.html";
                    break;
                case "Servicios":
                    fileName = "servicios.html";
                    break;
                case "Blog":
                    fileName = "blog.html";
                    break;
                case "Preguntas frecuentes":
                    fileName = "faq.html";
                    break;
                default:
                    return;
            }

            fetch(`../html/${fileName}`)
                .then(response => response.text())
                .then(data => {
                    contenido.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo:', error);
                    contenido.innerHTML = "<p>Hubo un error al cargar el contenido. Por favor, intenta de nuevo.</p>";
                });
        }
    });

    const mobileNavContainer = document.querySelector(".mobile-nav");

    mobileNavContainer.addEventListener("click", function(event) {
        const item = event.target;
        if (item.classList.contains("nav-item")) {
            let fileName;
            switch (item.textContent.trim()) {
                case "Nosotros":
                    fileName = "nosotros.html";
                    break;
                case "Servicios":
                    fileName = "servicios.html";
                    break;
                case "Blog":
                    fileName = "blog.html";
                    break;
                case "Preguntas frecuentes":
                    fileName = "faq.html";
                    break;
                default:
                    return;
            }

            fetch(`../html/${fileName}`)
                .then(response => response.text())
                .then(data => {
                    contenido.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el archivo:', error);
                    contenido.innerHTML = "<p>Hubo un error al cargar el contenido. Por favor, intenta de nuevo.</p>";
                });
        }
    });
});
