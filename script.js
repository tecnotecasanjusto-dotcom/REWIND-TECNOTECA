// ── Datos de los sectores ──
const sectores = {
    1: {
        title: "Escribe tu historia",
        number: "SECTOR 01",
        body: "Son los teclados que no conocían el borrar, donde cada letra quedaba sellada con tinta en el papel y el final de cada línea se anunciaba con el sonido de una campana.",
        tags: [],
        color: "var(--color-cyan)"
    },
    2: {
        title: "En la imagen",
        number: "SECTOR 02",
        body: "Los televisores de pantalla curva y sintonía manual. Esos muebles que tardaban unos segundos en calentar la imagen y que nos obligaban a mover la antena para ganarle a la lluvia de la estática, reuniendo a toda la familia.",
        tags: [],
        color: "var(--color-lime)"
    },
    3: {
        title: "Capturando realidad",
        number: "SECTOR 03",
        body: "Desde las pesadas máquinas de rollo donde cada foto era un tesoro que había que esperar para revelar, hasta los primeros destellos de los flashes que iluminaron nuestros cumpleaños y viajes.",
        tags: [], 
        color: "var(--color-orange)"
    },
    4: {
        title: "Arte de vivir escuchando",
        number: "SECTOR 04",
        body: "Aquí habitan los cassettes, esas pequeñas cajas de cinta magnética que guardan canciones grabadas de la radio y mensajes de voz.",
        tags: [], 
        color: "var(--color-yellow)"
    },
    5: {
        title: "Educación y Trabajo",
        number: "SECTOR 05",
        body: "Más que simples herramientas, estos equipos fueron los pupitres donde generaciones aprendieron un oficio con precisión y disciplina.",
        tags: [],
        color: "var(--color-red)"
    },
    6: {
        title: "Comunicación instantanea",
        number: "SECTOR 06",
        body: "Los teléfonos de línea que esperaban sobre la mesa del pasillo o el living. Equipos de cables enrulados que nos mantenían atados a la pared mientras hablábamos durante horas.",
        tags: [],
        color: "var(--color-navy)"
    },
    7: {
        title: "Los sonoros como vida",
        number: "SECTOR 07",
        body: "Ese diseño de madera y púa que nos regaló la calidez de los discos, ese sonido orgánico que comenzaba con un leve crujido antes de que la melodía se apoderara de la habitación.",
         tags: [],
        color: "var(--color-pink)"
    },
    8: {
        title: "Revelar un norte",
        number: "SECTOR 08",
        body: "Una colección de fotografías en blanco y negro que rescatan gestos, vestimentas y paisajes de otros tiempos. Son registros que funcionan como un espejo de nuestra identidad, recordándonos que somos el resultado de esas historias.",
        tags: [],
        color: "var(--color-green)"
    }
};

// ── Modal con Audio Dinámico ──
function openModal(sectorId) {
    const data = sectores[sectorId];
    if (!data) return;

    const overlay = document.getElementById('modalOverlay');
    const audioElement = document.getElementById('modalAudio');

    document.getElementById('modalNumber').textContent = data.number;
    document.getElementById('modalNumber').style.color = data.color;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalTitle').style.color = data.color;
    document.getElementById('modalBody').textContent = data.body;

    audioElement.src = `audios/sector${sectorId}.ogg`; 
    audioElement.load(); 

    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        span.style.color = data.color;
        span.style.borderColor = data.color;
        tagsEl.appendChild(span);
    });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const audioElement = document.getElementById('modalAudio');

    overlay.classList.remove('active');
    document.body.style.overflow = '';

    audioElement.pause();
    audioElement.currentTime = 0;
}

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ── Animación de aparición de cards al hacer scroll ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.sector-card').forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
});

// ── Efecto de cursor personalizado en cards ──
document.querySelectorAll('.sector-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});

console.log('%cTecnoteca · Rewind 2026', 'color: #3DD6DC; font-family: monospace; font-size: 14px; font-weight: bold;');
console.log('%c8 Sectores · Recorrido Histórico Tecnológico', 'color: #A8E63C; font-family: monospace;');
