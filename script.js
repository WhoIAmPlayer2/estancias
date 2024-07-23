const tematicas = [
    { id: 1, cuatrimestre: 1, nombre: 'Álgebra Lineal', url: 'algebra-lineal.html', progreso: 70 },
    { id: 2, cuatrimestre: 1, nombre: 'Expresión Oral Y Escrita I', url: 'expresion-oral-escrita-I.html', progreso: 40 },
    { id: 3, cuatrimestre: 1, nombre: 'Herramientas Ofimáticas', url: 'herramientas-ofimaticas.html', progreso: 60 },
    { id: 4, cuatrimestre: 1, nombre: 'Inglés I', url: 'ingles-I.html', progreso: 80 },
    { id: 5, cuatrimestre: 1, nombre: 'Introducción A La Programación', url: 'introduccion-programacion.html', progreso: 30 },
    { id: 6, cuatrimestre: 1, nombre: 'Introducción A Las Tecnologías De Información', url: 'introduccion-tecnologias-informacion.html', progreso: 50 },
    { id: 7, cuatrimestre: 1, nombre: 'Química Básica', url: 'quimica-basica.html', progreso: 20 },
    { id: 8, cuatrimestre: 2, nombre: 'Arquitectura De Computadoras', url: 'arquitectura-computadoras.html', progreso: 90 },
    { id: 9, cuatrimestre: 2, nombre: 'Desarrollo Humano Y Valores', url: 'desarrollo-humano-valores.html', progreso: 70 },
    { id: 10, cuatrimestre: 2, nombre: 'Electricidad Y Magnetismo', url: 'electricidad-magnetismo.html', progreso: 60 },
    { id: 11, cuatrimestre: 2, nombre: 'Física', url: 'fisica.html', progreso: 50 },
    { id: 12, cuatrimestre: 2, nombre: 'Funciones Matemáticas', url: 'funciones-matematicas.html', progreso: 40 },
    { id: 13, cuatrimestre: 2, nombre: 'Inglés II', url: 'ingles-II.html', progreso: 30 },
    { id: 14, cuatrimestre: 2, nombre: 'Matemáticas Básicas Para Computación', url: 'matematicas-basicas-computacion.html', progreso: 70 },
    { id: 15, cuatrimestre: 3, nombre: 'Cálculo Diferencial', url: 'calculo-diferencial.html', progreso: 85 },
    { id: 16, cuatrimestre: 3, nombre: 'Inglés III', url: 'ingles-III.html', progreso: 75 },
    { id: 17, cuatrimestre: 3, nombre: 'Inteligencia Emocional Y Manejo De Conflictos', url: 'inteligencia-emocional.html', progreso: 55 },
    { id: 18, cuatrimestre: 3, nombre: 'Introducción A Redes', url: 'introduccion-redes.html', progreso: 65 },
    { id: 19, cuatrimestre: 3, nombre: 'Mantenimiento A Equipo De Cómputo', url: 'mantenimiento-equipo-computo.html', progreso: 45 },
    { id: 20, cuatrimestre: 3, nombre: 'Probabilidad Y Estadística', url: 'probabilidad-estadistica.html', progreso: 50 },
    { id: 21, cuatrimestre: 3, nombre: 'Programación', url: 'programacion.html', progreso: 70 },
    { id: 22, cuatrimestre: 4, nombre: 'Cálculo Integral', url: 'calculo-integral.html', progreso: 60 },
    { id: 23, cuatrimestre: 4, nombre: 'Estancia I', url: 'estancia-I.html', progreso: 30 },
    { id: 24, cuatrimestre: 4, nombre: 'Estructura De Datos', url: 'estructura-datos.html', progreso: 45 },
    { id: 25, cuatrimestre: 4, nombre: 'Habilidades Cognitivas Y Creatividad', url: 'habilidades-cognitivas.html', progreso: 55 },
    { id: 26, cuatrimestre: 4, nombre: 'Ingeniería De Software', url: 'ingenieria-software.html', progreso: 50 },
    { id: 27, cuatrimestre: 4, nombre: 'Inglés IV', url: 'ingles-IV.html', progreso: 70 },
    { id: 28, cuatrimestre: 4, nombre: 'Ruteo Y Conmutación', url: 'ruteo-conmutacion.html', progreso: 65 },
    { id: 29, cuatrimestre: 5, nombre: 'Base De Datos', url: 'base-datos.html', progreso: 75 },
    { id: 30, cuatrimestre: 5, nombre: 'Escalamiento De Redes', url: 'escalamiento-redes.html', progreso: 80 },
    { id: 31, cuatrimestre: 5, nombre: 'Ética Profesional', url: 'etica-profesional.html', progreso: 60 },
    { id: 32, cuatrimestre: 5, nombre: 'Física Para Ingeniería', url: 'fisica-ingenieria.html', progreso: 50 },
    { id: 33, cuatrimestre: 5, nombre: 'Fundamentos De Programación Orientada A Objetos', url: 'fundamentos-programacion-orientada.html', progreso: 55 },
    { id: 34, cuatrimestre: 5, nombre: 'Inglés V', url: 'ingles-V.html', progreso: 65 },
    { id: 35, cuatrimestre: 5, nombre: 'Matemáticas Para Ingeniería I', url: 'matematicas-ingenieria-I.html', progreso: 60 },
    { id: 36, cuatrimestre: 6, nombre: 'Administración De Base De Datos', url: 'administracion-base-datos.html', progreso: 70 },
    { id: 37, cuatrimestre: 6, nombre: 'Habilidades Gerenciales', url: 'habilidades-gerenciales.html', progreso: 50 },
    { id: 38, cuatrimestre: 6, nombre: 'Inglés VI', url: 'ingles-VI.html', progreso: 75 },
    { id: 39, cuatrimestre: 6, nombre: 'Interconexión De Redes', url: 'interconexion-redes.html', progreso: 65 },
    { id: 40, cuatrimestre: 6, nombre: 'Matemáticas Para Ingeniería II', url: 'matematicas-ingenieria-II.html', progreso: 55 },
    { id: 41, cuatrimestre: 6, nombre: 'Programación Orientada A Objetos', url: 'programacion-orientada.html', progreso: 80 },
    { id: 42, cuatrimestre: 6, nombre: 'Sistemas Operativos', url: 'sistemas-operativos.html', progreso: 70 },
    { id: 43, cuatrimestre: 7, nombre: 'Estancia II', url: 'estancia-II.html', progreso: 60 },
    { id: 44, cuatrimestre: 7, nombre: 'Formulación De Proyectos De Tecnologías De Información', url: 'formulacion-proyectos-ti.html', progreso: 75 },
    { id: 45, cuatrimestre: 7, nombre: 'Ingeniería De Requisitos', url: 'ingenieria-requisitos.html', progreso: 50 },
    { id: 46, cuatrimestre: 7, nombre: 'Inglés VII', url: 'ingles-VII.html', progreso: 65 },
    { id: 47, cuatrimestre: 7, nombre: 'Lenguajes Y Autómatas', url: 'lenguajes-automatas.html', progreso: 70 },
    { id: 48, cuatrimestre: 7, nombre: 'Liderazgo De Equipos De Alto Desempeño', url: 'liderazgo-equipos.html', progreso: 60 },
    { id: 49, cuatrimestre: 7, nombre: 'Programación Web', url: 'programacion-web.html', progreso: 75 },
    { id: 50, cuatrimestre: 8, nombre: 'Administración De Proyectos De Tecnologías De Información', url: 'administracion-proyectos-ti.html', progreso: 80 },
    { id: 51, cuatrimestre: 8, nombre: 'Diseño De Interfaces', url: 'diseno-interfaces.html', progreso: 65 },
    { id: 52, cuatrimestre: 8, nombre: 'Gestión De Desarrollo De Software', url: 'gestion-desarrollo-software.html', progreso: 55 },
    { id: 53, cuatrimestre: 8, nombre: 'Inglés VIII', url: 'ingles-VIII.html', progreso: 70 },
    { id: 54, cuatrimestre: 8, nombre: 'Sistemas Inteligentes', url: 'sistemas-inteligentes.html', progreso: 60 },
    { id: 55, cuatrimestre: 8, nombre: 'Tecnologías De Virtualización', url: 'tecnologias-virtualizacion.html', progreso: 75 },
    { id: 56, cuatrimestre: 8, nombre: 'Tecnologías Y Aplicaciones En Internet', url: 'tecnologias-aplicaciones-internet.html', progreso: 65 },
    { id: 57, cuatrimestre: 9, nombre: 'Desarrollo De Negocios Para Tecnologías De Información', url: 'desarrollo-negocios-ti.html', progreso: 70 },
];

// Función para renderizar los cuatrimestres
function renderCuatrimestres() {
    const cuatrimestres = [...new Set(tematicas.map(item => item.cuatrimestre))];
    const container = document.getElementById('cuatrimestres');

    cuatrimestres.forEach(cuatrimestre => {
        const div = document.createElement('div');
        div.className = 'cuatrimestre';
        div.dataset.cuatrimestre = cuatrimestre;
        div.textContent = `Cuatrimestre ${cuatrimestre}`;
        container.appendChild(div);
    });
}

// Función para renderizar las temáticas
function renderTematicas(cuatrimestre) {
    const container = document.getElementById('tematicas');
    container.innerHTML = '';

    const tematicasFiltradas = tematicas.filter(item => item.cuatrimestre == cuatrimestre);

    tematicasFiltradas.forEach(tema => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';

        tarjeta.innerHTML = `
            <a href="${tema.url}">
                <div class="nombre">${tema.nombre}</div>
                <div class="progreso" style="width: ${tema.progreso}%"></div>
            </a>
        `;

        container.appendChild(tarjeta);
    });

    container.style.display = 'flex'; // Mostrar la sección de temáticas
}

// Manejo de eventos
document.addEventListener('DOMContentLoaded', () => {
    renderCuatrimestres();

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const tarjetas = document.querySelectorAll('#tematicas .tarjeta');
        
        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.querySelector('.nombre').textContent.toLowerCase();
            tarjeta.style.display = nombre.includes(query) ? 'block' : 'none';
        });
    });

    document.getElementById('cuatrimestres').addEventListener('click', (e) => {
        if (e.target.classList.contains('cuatrimestre')) {
            document.querySelectorAll('#cuatrimestres .cuatrimestre').forEach(div => {
                div.classList.remove('cuatrimestre-activo');
            });

            e.target.classList.add('cuatrimestre-activo');
            renderTematicas(e.target.dataset.cuatrimestre);
        }
    });
});
