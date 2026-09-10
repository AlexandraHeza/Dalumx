document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Hamburguesa Responsive ---
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- Cerrar menú al hacer clic en un enlace (Móvil) ---
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });

    // --- Simulación de Pago de Membresía ---
    // En un caso real, esto conectaría con Stripe, PayPal o MercadoPago.
    window.pagarMembresia = function() {
        const confirmacion = confirm("Serás redirigido a la pasarela de pago seguro para suscribirte a la Membresía dalumx VIP.\n\n¿Deseas continuar?");
        
        if (confirmacion) {
            // Aquí se integraría la pasarela de pago real
            alert("Redirigiendo a Stripe/PayPal... (Simulación)");
            // window.location.href = "https://tu-pasarela-de-pago.com/checkout";
        }
    };

    // --- Animación simple de Scroll (Fade In) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar animación a las tarjetas de cursos y servicios
    const cards = document.querySelectorAll('.card, .service-item, .pricing-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // --- Botón de WhatsApp Flotante (Opcional) ---
    // Se puede añadir dinámicamente si se desea
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/521234567890"; // Reemplazar con número real
    whatsappBtn.target = "_blank";
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: transform 0.3s;
    `;
    whatsappBtn.onmouseover = () => whatsappBtn.style.transform = 'scale(1.1)';
    whatsappBtn.onmouseout = () => whatsappBtn.style.transform = 'scale(1)';
    document.body.appendChild(whatsappBtn);

});