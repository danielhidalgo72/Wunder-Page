document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('menu-icon').addEventListener('click', function() {
        var mobileNav = document.getElementById('mobile-nav');
        mobileNav.classList.toggle('show');
    });
    
    fetch(`../html/nosotros.html`)
        .then(response => response.text())
        .then(data => {
            contenido.innerHTML = data;
            elementosInicialesNosotros()
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
                    if(fileName == 'nosotros.html')
                        elementosInicialesNosotros()
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
                    if(fileName == 'nosotros.html')
                        elementosInicialesNosotros()
                })
                .catch(error => {
                    console.error('Error al cargar el archivo:', error);
                    contenido.innerHTML = "<p>Hubo un error al cargar el contenido. Por favor, intenta de nuevo.</p>";
                });
        }
    });
});

function elementosInicialesNosotros() {
    document.getElementById('img-nube').src = '../assets/img/icono_servicios_nube_white.svg'
    document.getElementById('img-ciberseguridad').src = '../assets/img/icono_ciberseguridad_white.svg'
    document.getElementById('img-nearshoring').src = '../assets/img/icono_nearshoring_white.svg'

    movePreguntas();
}

function showContent(service) {
    const content = document.getElementById('content-descripcion-servicios');
    const items = document.querySelectorAll('.menu-item-descripcion-servicios');
    const backgrounds = document.querySelectorAll('.background-descripcion-servicios');
    backgrounds.forEach(background => {
        background.className = 'background-descripcion-servicios';
    });
    items.forEach(item => item.classList.remove('active'));

    if (service === 'softlab') {
        content.innerHTML = `
            <h2 style="color: #1A9DD9">SoftLab</h2>
            <div class="subheading">Es nuestro laboratorio de Software a la medida.</div>
            <p>Vamos más allá que las tradicionales fábricas de software. Nos sumergimos en el corazón de tus necesidades, las entendemos y diseñamos para crear soluciones tecnológicas personalizadas a cada cliente.</p>
        `;
        document.querySelector('.menu-item-softlab').classList.add('active');
        document.querySelector('.background-descripcion-servicios').classList.add('softlab');
        document.getElementById('img-softlab').src = '../assets/img/icono_softlab.svg'
        document.getElementById('img-nube').src = '../assets/img/icono_servicios_nube_white.svg'
        document.getElementById('img-ciberseguridad').src = '../assets/img/icono_ciberseguridad_white.svg'
        document.getElementById('img-nearshoring').src = '../assets/img/icono_nearshoring_white.svg'
    } else if (service === 'nube') {
        content.innerHTML = `
            <h2 style="color: #7D4593">Servicios de la nube</h2>
            <div class="subheading">Flexibilidad sin límites.</div>
            <p>Tenemos experiencia en transformación end-to-end (una solución funcional completa). A través de la nube, migramos, administramos, monitoreamos y creamos soluciones.</p>
        `;
        document.querySelector('.menu-item-nube').classList.add('active');
        document.querySelector('.background-descripcion-servicios').classList.add('nube');
        document.getElementById('img-softlab').src = '../assets/img/icono_softlab_white.svg'
        document.getElementById('img-nube').src = '../assets/img/icono_servicios_nube.svg'
        document.getElementById('img-ciberseguridad').src = '../assets/img/icono_ciberseguridad_white.svg'
        document.getElementById('img-nearshoring').src = '../assets/img/icono_nearshoring_white.svg'
    } else if (service === 'ciberseguridad') {
        content.innerHTML = `
            <h2 style="color: #21428F">Ciberseguridad</h2>
            <div class="subheading">Salvaguardamos tu información y sistemas vitales.</div>
            <p>Aseguramos la continuidad operativa de tu empresa ante riesgos y amenazas como robos, alteraciones, bloqueos y otros ataques que comprometan tus datos y la infraestructura tecnológica.</p>
        `;
        document.querySelector('.menu-item-ciberseguridad').classList.add('active');
        document.querySelector('.background-descripcion-servicios').classList.add('ciberseguridad');
        document.getElementById('img-softlab').src = '../assets/img/icono_softlab_white.svg'
        document.getElementById('img-nube').src = '../assets/img/icono_servicios_nube_white.svg'
        document.getElementById('img-ciberseguridad').src = '../assets/img/icono_ciberseguridad.svg'
        document.getElementById('img-nearshoring').src = '../assets/img/icono_nearshoring_white.svg'
    } else if (service === 'nearshoring') {
        content.innerHTML = `
            <h2 style="color: #F6A500">Nearshoring</h2>
            <div class="subheading">Expanda sus capacidades técnicas sin las complicaciones del reclutamiento tradicional.</div>
            <p>Ofrecemos soluciones de Staff Augmentation integrando talento altamente calificado desde ubicaciones cercanas, garantizando colaboración eficiente, comunicación fluida y alineación cultural.</p>
        `;
        document.querySelector('.menu-item-nearshoring').classList.add('active');
        document.querySelector('.background-descripcion-servicios').classList.add('nearshoring');
        document.getElementById('img-softlab').src = '../assets/img/icono_softlab_white.svg'
        document.getElementById('img-nube').src = '../assets/img/icono_servicios_nube_white.svg'
        document.getElementById('img-ciberseguridad').src = '../assets/img/icono_ciberseguridad_white.svg'
        document.getElementById('img-nearshoring').src = '../assets/img/icono_nearshoring.svg'
    }
}

function movePreguntas() {
    const preguntas = [
        "¿Quieres mejorar la gestión operativa de tu empresa?",
        "¿Te falta visibilidad en tiempo real del desempeño de toda la empresa?",
        "¿Tu empresa tiene necesidades únicas y específicas?",
        "¿Tus procesos financieros son manuales y propensos a errores?",
        "¿Necesitas mejorar la escalabilidad y eficiencia de tu empresa?",
        "¿Te preocupa la seguridad y la protección de los datos de tu empresa?",
        "¿Te cuesta trabajo gestionar varios proyectos tecnológicos al mismo tiempo?",
        "¿Tus empleados se resisten a los cambios tecnológicos?",
        "¿Tu cadena de suministro tiene ineficiencias que afectan la operación?",
        "¿Hay falta de coordinación y comunicación entre tus equipos?",
        "¿Valoras la flexibilidad y la personalización de una solución a la medida?",
        "¿Gestionar los riesgos laborales y la seguridad física es un dolor de cabeza?",
        "¿Te resulta difícil gestionar el talento y los procesos de reclutamiento?",
        "¿Gestionar la infraestructura de TI es una tarea complicada y lenta?"
    ];

    const preguntasContainer = document.querySelector('.preguntas');

    preguntas.forEach((pregunta, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('pregunta');
        if (index === 3) {
            preguntaDiv.classList.add('central');
        }
        preguntaDiv.innerText = pregunta;
        preguntasContainer.appendChild(preguntaDiv);
    });

    setInterval(() => {
        const firstPregunta = preguntasContainer.firstElementChild;
        preguntasContainer.appendChild(firstPregunta);
        preguntasContainer.children[3].classList.add('central');
        preguntasContainer.children[2].classList.remove('central');
    }, 4500);
}
