
    // ========== 1. FONDO DINÁMICO CON IMÁGENES DE MÁRMOL Y COCINAS ==========
    const bgImages = [
        "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2087365/pexels-photo-2087365.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2765289/pexels-photo-2765289.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1457836/pexels-photo-1457836.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    ];

    let currentIndex = 0;
    const dynamicBg = document.getElementById('dynamicBg');
    dynamicBg.style.backgroundImage = `url(${bgImages[0]})`;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bgImages.length;
        dynamicBg.style.backgroundImage = `url(${bgImages[currentIndex]})`;
    }, 20000);

    // ========== 2. PRODUCTOS DE COCINA EN MÁRMOL ==========
    const products = [
        { name: "Encimera Carrara", description: "Mármol blanco con vetas grises sutiles", price: "$12,900 MXN", image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
        { name: "Isla Calacatta", description: "Mármol dorado con vetas intensas", price: "$18,500 MXN", image: "https://images.pexels.com/photos/2765289/pexels-photo-2765289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
        { name: "Mesa de Centro Negro", description: "Mármol absoluto negro pulido", price: "$8,900 MXN", image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
        { name: "Cubierta para Barra", description: "Mármol Emperador dark", price: "$15,200 MXN", image: "https://images.pexels.com/photos/2087365/pexels-photo-2087365.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" }
    ];

    const productsGrid = document.getElementById('productsGrid');
    function renderProducts() {
        productsGrid.innerHTML = '';
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}" class="product-image floating-img">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                    <div class="product-price">${p.price}</div>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }
    renderProducts();

    // ========== 3. GALERÍA DE MÁRMOL ==========
    const galleryImages = [
        "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/2765289/pexels-photo-2765289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/2087365/pexels-photo-2087365.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1457836/pexels-photo-1457836.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    function renderGallery() {
        galleryGrid.innerHTML = '';
        galleryImages.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${img}" class="gallery-img" alt="Cocina mármol">`;
            galleryGrid.appendChild(item);
        });
    }
    renderGallery();

    // ========== 4. TESTIMONIOS ==========
    const testimonios = [
        { nombre: "Isabella R.", texto: "Mi cocina de mármol blanco es una obra de arte. La instalación fue impecable.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/68.jpg" },
        { nombre: "Alejandro M.", texto: "La isla de mármol transformó por completo mi espacio. Excelente calidad.", rating: 5, imagen: "https://randomuser.me/api/portraits/men/32.jpg" },
        { nombre: "Carmen L.", texto: "Preciosos acabados y atención personalizada. Muy recomendados.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/44.jpg" },
        { nombre: "Ricardo G.", texto: "El mármol negro le dio un toque de lujo a mi cocina. Quedé fascinado.", rating: 5, imagen: "https://randomuser.me/api/portraits/men/75.jpg" }
    ];

    const sliderContainer = document.getElementById('testimonialSlider');
    function renderTestimonials() {
        sliderContainer.innerHTML = '';
        testimonios.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
                    <img src="${t.imagen}" style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(128, 65, 151, 1);">
                    <div><strong>${t.nombre}</strong><br>⭐ ${t.rating}.0</div>
                </div>
                <p>“${t.texto}”</p>
            `;
            sliderContainer.appendChild(card);
        });
        let index = 0;
        setInterval(() => {
            if (sliderContainer.children.length) {
                index = (index + 1) % sliderContainer.children.length;
                sliderContainer.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }, 4000);
    }
    renderTestimonials();

    // ========== 5. MENÚ RESPONSIVE ==========
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#1a1a1a';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1rem';
                navLinks.style.zIndex = '1000';
            }
        });
    }
