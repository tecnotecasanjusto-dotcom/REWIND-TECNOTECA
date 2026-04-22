// ── Datos de los sectores ──
const sectores = {
    1: {
        title: "Escribe tu historia",
        number: "SECTOR 01",
        body: "Desde la rueda hasta la imprenta de Gutenberg, este sector recorre los inventos fundamentales que sentaron las bases del progreso humano. Explorá herramientas de la prehistoria, los avances de Mesopotamia, Egipto, Grecia y Roma, y cómo la imprenta revolucionó la difusión del conocimiento en el siglo XV.",
        tags: [],
        color: "var(--color-cyan)"
    },
    2: {
        title: "En la imagen",
        number: "SECTOR 02",
        body: "El siglo XVIII marcó un quiebre en la historia de la humanidad. La máquina de vapor de James Watt, los telares mecánicos y el nacimiento de la fábrica transformaron para siempre la forma en que trabajamos, vivimos y producimos. Este sector muestra piezas, réplicas y documentos de esa época bisagra.",
        tags: [],
        color: "var(--color-lime)"
    },
    3: {
        title: "Capturando realidad",
        number: "SECTOR 03",
        body: "Tesla versus Edison, corriente alterna versus corriente continua. La electricidad que iluminó calles, hogares e industrias a finales del siglo XIX. Explorá generadores originales, bombillas históricas y la historia de cómo la energía eléctrica se convirtió en el pilar del mundo moderno.",
        tags: [], 
        color: "var(--color-orange)"
    },
    4: {
        title: "Arte de vivir escuchando",
        number: "SECTOR 04",
        body: "Del punto y raya del código Morse al teléfono de Bell, y de ahí a la radio de Marconi y la televisión. Este sector narra cómo la humanidad aprendió a enviar información a distancia, comprimiendo el mundo en señales y ondas que viajaban más rápido que cualquier mensajero.",
        tags: [], 
        color: "var(--color-yellow)"
    },
    5: {
        title: "Educación y Trabajo",
        number: "SECTOR 05",
        body: "4 de octubre de 1957: el Sputnik orbita la Tierra y la carrera espacial comienza. Este sector recorre los hitos de la exploración espacial: Yuri Gagarin, Apollo 11, el primer paso en la Luna, y los satélites que hoy hacen posible el GPS, las comunicaciones y la observación de nuestro planeta.",
        tags: [],
        color: "var(--color-red)"
    },
    6: {
        title: "Comunicación instantanea",
        number: "SECTOR 06",
        body: "El Altair 8800, el Apple I de Wozniak y Jobs, el IBM PC y la GUI de Xerox PARC. En los años '70 y '80, la computadora dejó de ser una máquina de institución para convertirse en una herramienta personal. Este sector exhibe equipos originales, disquetes y los primeros sistemas operativos.",
        tags: [],
        color: "var(--color-navy)"
    },
    7: {
        title: "Los sonoros como vida",
        number: "SECTOR 07",
        body: "Tim Berners-Lee inventó la World Wide Web en 1991 y el mundo nunca volvió a ser igual. Del dial-up al ADSL, de los foros IRC a las redes sociales. Este sector muestra cómo Internet pasó de ser una red militar a convertirse en la infraestructura de la sociedad global del siglo XXI.",
         tags: [],
        color: "var(--color-pink)"
    },
    8: {
        title: "Revelar un norte",
        number: "SECTOR 08",
        body: "Machine learning, redes neuronales profundas, procesamiento de lenguaje natural y visión por computadora. La IA pasó de la ciencia ficción a estar presente en nuestro celular, nuestro trabajo y nuestra vida cotidiana. Este sector explora el presente y los desafíos éticos del futuro tecnológico.",
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

    audioElement.src = `/Audios/Sector${sectorId}.ogg`; 
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
