document.addEventListener('DOMContentLoaded', () => {
    // --- Datos JSON Integrados (Simulación de API) ---
    const data = {
        "wines": [
            {
                "id": 1,
                "name": "Borgon Reserva Especial",
                "winery": "Bodegas Borgon",
                "region": "Ribera del Duero",
                "grape": "Tempranillo",
                "vintage": 2018,
                "image": "https://source.unsplash.com/featured/300x200/?red-wine-bottle,cellar",
                "notes": "Color rojo picota intenso con ribete granate. En nariz, aromas complejos a frutos rojos maduros (cereza, ciruela), notas especiadas de vainilla y clavo, y un fondo balsámico y tostado procedente de su larga crianza en barrica de roble francés y americano. En boca es potente, estructurado y elegante, con taninos redondos y sedosos. Final largo y persistente, dejando sensaciones de fruta madura y cacao.",
                "pairing": "Cordero asado, cochinillo, chuletón de buey, quesos muy curados como el Manchego o el Idiazábal.",
                "temperature": "16-18°C",
                "alcohol": "14.5%",
                "body": "Full",
                "acidity": "Medium-High",
                "tannins": "High"
            },
            {
                "id": 2,
                "name": "Borgon Crianza Selección",
                "winery": "Bodegas Borgon",
                "region": "Rioja",
                "grape": "Tempranillo, Garnacha",
                "vintage": 2020,
                "image": "https://source.unsplash.com/featured/300x200/?wine-glass,vineyard",
                "notes": "Rojo cereza brillante con destellos rubí. Nariz expresiva donde destacan las frutas del bosque frescas (frambuesa, fresa) entrelazadas con notas de regaliz, vainilla y un sutil toque tostado. En boca es equilibrado, fresco y de paso amable, con taninos pulidos y una acidez bien integrada que invita a seguir bebiendo.",
                "pairing": "Embutidos ibéricos, carnes a la brasa, pasta con salsa boloñesa, estofados ligeros y quesos semicurados.",
                "temperature": "14-16°C",
                "alcohol": "13.5%",
                "body": "Medium",
                "acidity": "Medium",
                "tannins": "Medium"
            },
            {
                "id": 3,
                "name": "Borgon Tinto Joven",
                "winery": "Bodegas Borgon",
                "region": "Toro",
                "grape": "Tinta de Toro (Tempranillo)",
                "vintage": 2023,
                "image": "https://source.unsplash.com/featured/300x200/?wine-label,red-wine",
                "notes": "Color violeta intenso con reflejos azulados, denotando su juventud. En nariz, explosión de aromas a frutos negros (mora, ciruela) y rojos (frambuesa) frescos, con toques florales de violeta. En boca es potente y carnoso, pero a la vez jugoso y vibrante, con taninos presentes pero muy suaves y una acidez refrescante que lo hace muy fácil de beber.",
                "pairing": "Tapas variadas, arroces de carne o verduras, pizzas, quesos frescos y embutidos.",
                "temperature": "12-14°C",
                "alcohol": "14%",
                "body": "Medium-Full",
                "acidity": "High",
                "tannins": "Medium-Low"
            },
            {
                "id": 4,
                "name": "Borgon Merlot del Valle",
                "winery": "Bodegas Borgon",
                "region": "Valle de Maipo (Chile)",
                "grape": "Merlot",
                "vintage": 2021,
                "image": "https://source.unsplash.com/featured/300x200/?wine-bottle,cork",
                "notes": "Rojo rubí brillante. En nariz, aromas intensos a frutas rojas y negras maduras (ciruela, cassis) con delicadas notas de vainilla, chocolate y un fondo herbáceo. En boca es suave y redondo, con taninos dulces y bien integrados. Final sedoso y persistente que invita a un segundo trago.",
                "pairing": "Pollo asado, salmón a la plancha, cerdo agridulce, quesos suaves como el Brie o Camembert.",
                "temperature": "15-17°C",
                "alcohol": "13%",
                "body": "Medium",
                "acidity": "Medium",
                "tannins": "Medium"
            }
        ],
        "articles": [
            {
                "id": 1,
                "title": "Guía de Cata para Principiantes: Descifra los Secretos del Vino Tinto",
                "summary": "Sumérgete en el arte de la cata. Aprende a diferenciar aromas y texturas en tu vino tinto favorito con nuestra guía paso a paso.",
                "content": "La cata de vino es mucho más que beber; es una experiencia sensorial que se aprende con la práctica. Primero, observa el **color** y su intensidad: ¿es un rojo cereza brillante, un rubí intenso o un picota casi opaco? Esto te dará pistas sobre la edad y la variedad de uva. Luego, llega el momento de los **aromas**. Gira suavemente la copa para liberar los compuestos volátiles y detecta notas de frutas, flores, especias, madera o incluso minerales. Finalmente, saborea el vino, prestando atención a su **cuerpo** (ligero, medio, pleno), la **acidez** (refrescante, punzante), los **taninos** (astringentes, sedosos) y el **final** (la persistencia de los sabores en boca). ¡Con práctica, te convertirás en un experto!",
                "image": "https://source.unsplash.com/featured/300x180/?wine-tasting,sommelier"
            },
            {
                "id": 2,
                "title": "Descubriendo la Rioja: Cuna del Tempranillo y la Tradición Vinícola Española",
                "summary": "Un viaje apasionante por la región vinícola más famosa de España, hogar de vinos con historia y un sabor inconfundible.",
                "content": "La **Denominación de Origen Calificada Rioja** es, sin lugar a dudas, la región vinícola más emblemática de España. Sus viñedos, distribuidos a lo largo del río Ebro, gozan de un clima y unos suelos ideales para la viticultura. La **uva Tempranillo** es la reina indiscutible de Rioja, responsable de sus característicos vinos tintos, conocidos por su equilibrio, estructura y capacidad de envejecimiento. Los vinos de Rioja se clasifican tradicionalmente en Joven, Crianza, Reserva y Gran Reserva, cada uno con distintos requisitos de envejecimiento en barrica y botella, lo que permite disfrutar de una amplia gama de estilos, desde los más frescos y frutales hasta los más complejos y evolucionados.",
                "image": "https://source.unsplash.com/featured/300x180/?vineyard,rioja"
            },
            {
                "id": 3,
                "title": "El Arte del Maridaje: Encuentra la Combinación Perfecta para tu Vino Tinto",
                "summary": "Desvela los secretos para combinar vinos tintos con tus platos favoritos y eleva tu experiencia gastronómica.",
                "content": "El maridaje es el arte de combinar alimentos y vinos de forma que se potencien mutuamente, creando una armonía de sabores. Para los vinos tintos, la regla general es maridar la intensidad del vino con la intensidad de la comida. Vinos tintos ligeros y afrutados (como un Pinot Noir o un Garnacha joven) combinan bien con pollo, pescado azul o pastas con salsas suaves. Los tintos de cuerpo medio (como un Crianza de Rioja o un Merlot) son excelentes con carnes a la brasa, embutidos y quesos semicurados. Finalmente, los tintos potentes y estructurados (como un Ribera del Duero Reserva o un Cabernet Sauvignon) son ideales para carnes rojas asadas, caza y quesos muy curados. Experimenta y descubre tus combinaciones favoritas.",
                "image": "https://source.unsplash.com/featured/300x180/?food-wine,pairing"
            }
        ],
        "tastings": [
            {
                "id": 1,
                "name": "Cata Vertical Bodegas Borgon Reserva",
                "date": "15 de Agosto de 2025",
                "time": "18:00",
                "address": "Calle del Vino, 10",
                "city": "Aranda de Duero",
                "description": "Una experiencia única para explorar la evolución de nuestro Borgon Reserva Especial a través de varias añadas. Descubre la magia del envejecimiento.",
                "hostWinery": "Bodegas Borgon",
                "contactEmail": "catas@vinotintoborgon.com",
                "registrationLink": "https://example.com/registro-cata1",
                "latitude": 41.6749,
                "longitude": -3.6874
            },
            {
                "id": 2,
                "name": "Maridaje de Vinos de Toro y Quesos",
                "date": "1 de Septiembre de 2025",
                "time": "19:30",
                "address": "Plaza Mayor, 5",
                "city": "Toro",
                "description": "Explora la potencia de los vinos de Toro en armonía con una selección de quesos locales e internacionales.",
                "hostWinery": "Enoteca El Duero",
                "contactEmail": "info@enotecaduero.com",
                "registrationLink": null,
                "latitude": 41.5235,
                "longitude": -5.3941
            },
            {
                "id": 3,
                "name": "Introducción a los Vinos de Rioja",
                "date": "20 de Septiembre de 2025",
                "time": "17:00",
                "address": "Av. de Mendavia, 12",
                "city": "Logroño",
                "description": "Un curso intensivo para principiantes sobre las variedades, regiones y características de los vinos de Rioja.",
                "hostWinery": "Centro de la Cultura del Vino",
                "contactEmail": "cursos@culturavino.es",
                "registrationLink": "https://example.com/registro-rioja",
                "latitude": 42.4641,
                "longitude": -2.4497
            },
            {
                "id": 4,
                "name": "Ruta de Vendimia y Cata",
                "date": "5 de Octubre de 2025",
                "time": "10:00",
                "address": "Camino del Viñedo s/n",
                "city": "Valbuena de Duero",
                "description": "Vive la experiencia de la vendimia y termina con una cata especial de nuestros vinos recién elaborados.",
                "hostWinery": "Bodegas Vega Sicilia",
                "contactEmail": "visitas@bodegasvegasicilia.com",
                "registrationLink": "https://www.bodegasvegasicilia.com/visitas",
                "latitude": 41.6389,
                "longitude": -4.2694
            }
        ]
    };

    // --- Selección de Elementos del DOM ---
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('.main-content section');
    const callToActionBtn = document.querySelector('.call-to-action-btn');

    // Elementos de la sección Explorar Vinos
    const searchInput = document.getElementById('searchInput');
    const regionFilter = document.getElementById('regionFilter');
    const grapeFilter = document.getElementById('grapeFilter');
    const vintageFilter = document.getElementById('vintageFilter');
    const searchBtn = document.getElementById('searchBtn');
    const wineListings = document.getElementById('wineListings');

    // Elementos de la sección Artículos
    const articleListings = document.getElementById('articleListings');

    // Elementos de la sección Catas
    const tastingDetailsDiv = document.getElementById('tastingDetails');
    let map; // Variable global para el mapa de Google Maps
    let markers = []; // Para guardar los marcadores del mapa

    // --- Funciones de Utilidad ---

    // Función para mostrar una sección y ocultar las demás
    function showSection(id) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(id).classList.remove('hidden');

        // Acciones específicas al mostrar una sección
        if (id === 'explore') {
            loadFilters(); // Carga las opciones de filtros la primera vez que se visita
            loadWines(); // Carga los vinos
        } else if (id === 'articles') {
            loadArticles(); // Carga los artículos
        } else if (id === 'tastings') {
            // Se asegura de que la API de Google Maps esté cargada antes de inicializar el mapa
            // La función initMap ya se llama automáticamente cuando la API se carga (ver script tag en HTML)
            // Aquí solo nos aseguramos de que si ya existe, se actualicen los marcadores
            if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
                if (!map) {
                    initMap(); // Inicializa el mapa si no existe
                } else {
                    loadTastingsOnMap(); // Si ya existe, solo recarga los marcadores
                }
            } else {
                console.warn("Google Maps API aún no está cargada. Retrasando inicialización del mapa.");
                // Podrías mostrar un mensaje al usuario o un spinner aquí
            }
        }
        // Desplazarse al inicio de la sección
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // --- Navegación Principal ---
    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1); // Elimina '#'
            showSection(targetId);
        });
    });

    // Botón de Call to Action en la sección de inicio
    if (callToActionBtn) {
        callToActionBtn.addEventListener('click', () => {
            const targetSectionId = callToActionBtn.dataset.section;
            showSection(targetSectionId);
        });
    }

    // Mostrar la sección de inicio al cargar la página
    showSection('home');

    // --- Funciones de simulación de API con los datos integrados ---

    function getWines(query = '', region = '', grape = '', vintage = '') {
        let filteredWines = data.wines;

        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            filteredWines = filteredWines.filter(wine =>
                wine.name.toLowerCase().includes(lowerCaseQuery) ||
                wine.winery.toLowerCase().includes(lowerCaseQuery) ||
                wine.region.toLowerCase().includes(lowerCaseQuery) ||
                wine.grape.toLowerCase().includes(lowerCaseQuery) ||
                wine.notes.toLowerCase().includes(lowerCaseQuery) ||
                wine.pairing.toLowerCase().includes(lowerCaseQuery)
            );
        }
        if (region) {
            filteredWines = filteredWines.filter(wine => wine.region === region);
        }
        if (grape) {
            filteredWines = filteredWines.filter(wine => wine.grape === grape);
        }
        if (vintage) {
            filteredWines = filteredWines.filter(wine => wine.vintage === parseInt(vintage));
        }
        return filteredWines;
    }

    function getArticles() {
        return data.articles;
    }

    function getTastings() {
        return data.tastings;
    }

    // --- Sección Explorar Vinos ---

    // Cargar los vinos y mostrarlos en la interfaz
    function loadWines() {
        const query = searchInput.value.trim();
        const region = regionFilter.value;
        const grape = grapeFilter.value;
        const vintage = vintageFilter.value;

        // No se necesita mensaje de carga visible tan largo al ser instantáneo
        const wines = getWines(query, region, grape, vintage);
        wineListings.innerHTML = ''; // Limpiar listado anterior

        if (wines.length === 0) {
            wineListings.innerHTML = '<p class="no-results">No se encontraron vinos con los criterios de búsqueda.</p>';
            return;
        }

        wines.forEach(wine => {
            const wineCard = `
                <div class="wine-card">
                    <img src="${wine.image}" alt="Botella de ${wine.name}">
                    <div class="wine-card-content">
                        <h3>${wine.name}</h3>
                        <p><strong>Bodega:</strong> ${wine.winery}</p>
                        <p><strong>Región:</strong> ${wine.region}</p>
                        <p><strong>Uva:</strong> ${wine.grape}</p>
                        <p><strong>Añada:</strong> ${wine.vintage}</p>
                        <p class="notes">${wine.notes.substring(0, 120)}...</p>
                        <button class="view-details-btn" data-wine-id="${wine.id}">Ver Detalles</button>
                    </div>
                </div>
            `;
            wineListings.innerHTML += wineCard;
        });

        // Añadir event listeners a los botones "Ver Detalles"
        document.querySelectorAll('.view-details-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const wineId = parseInt(e.target.dataset.wineId);
                const selectedWine = data.wines.find(w => w.id === wineId);
                if (selectedWine) {
                    showModal('wine', selectedWine);
                }
            });
        });
    }

    // Cargar opciones de filtro (regiones, uvas y añadas únicas)
    function loadFilters() {
        const allWines = data.wines; // Obtener todos los vinos para extraer filtros
        const regions = [...new Set(allWines.map(wine => wine.region))].sort();
        const grapes = [...new Set(allWines.map(wine => wine.grape))].sort();
        const vintages = [...new Set(allWines.map(wine => wine.vintage))].sort((a, b) => b - a); // Ordenar de más reciente a más antiguo

        populateFilter(regionFilter, regions, 'Todas las Regiones');
        populateFilter(grapeFilter, grapes, 'Todas las Uvas');
        populateFilter(vintageFilter, vintages, 'Todas las Añadas');
    }

    // Helper para poblar selects de filtro
    function populateFilter(selectElement, optionsArray, defaultText) {
        selectElement.innerHTML = `<option value="">${defaultText}</option>`;
        optionsArray.forEach(option => {
            selectElement.innerHTML += `<option value="${option}">${option}</option>`;
        });
    }

    // Event listeners para los filtros
    if (searchBtn) {
        searchBtn.addEventListener('click', loadWines);
    }
    if (regionFilter) {
        regionFilter.addEventListener('change', loadWines);
    }
    if (grapeFilter) {
        grapeFilter.addEventListener('change', loadWines);
    }
    if (vintageFilter) {
        vintageFilter.addEventListener('change', loadWines);
    }
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                loadWines();
            }
        });
    }

    // --- Sección Artículos ---

    // Cargar y mostrar artículos
    function loadArticles() {
        // No se necesita mensaje de carga visible tan largo al ser instantáneo
        const articles = getArticles();
        articleListings.innerHTML = '';

        if (articles.length === 0) {
            articleListings.innerHTML = '<p class="no-results">No hay artículos disponibles en este momento.</p>';
            return;
        }

        articles.forEach(article => {
            const articleCard = `
                <article class="article-card">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-card-content">
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                        <button class="read-more" data-article-id="${article.id}">Leer más</button>
                    </div>
                </article>
            `;
            articleListings.innerHTML += articleCard;
        });

        // Añadir event listeners para los botones "Leer más"
        document.querySelectorAll('.article-card .read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                const articleId = parseInt(e.target.dataset.articleId);
                const selectedArticle = data.articles.find(a => a.id === articleId);
                if (selectedArticle) {
                    showModal('article', selectedArticle);
                }
            });
        });
    }

    // --- Modal Genérico para Detalles (Vino o Artículo) ---
    function showModal(type, item) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        let contentHTML = '';
        if (type === 'wine') {
            contentHTML = `
                <img src="${item.image}" alt="Botella de ${item.name}">
                <h3>${item.name}</h3>
                <p><strong>Bodega:</strong> ${item.winery}</p>
                <p><strong>Región:</strong> ${item.region}</p>
                <p><strong>Uva:</strong> ${item.grape}</p>
                <p><strong>Añada:</strong> ${item.vintage}</p>
                <p><strong>Graduación:</strong> ${item.alcohol}</p>
                <p><strong>Temperatura de Servicio:</strong> ${item.temperature}</p>
                <p><strong>Notas de Cata:</strong> ${item.notes}</p>
                <p><strong>Maridaje Sugerido:</strong> ${item.pairing}</p>
                <p><strong>Cuerpo:</strong> ${item.body || 'N/A'}</p>
                <p><strong>Acidez:</strong> ${item.acidity || 'N/A'}</p>
                <p><strong>Taninos:</strong> ${item.tannins || 'N/A'}</p>
            `;
        } else if (type === 'article') {
            contentHTML = `
                <h3>${item.title}</h3>
                <img src="${item.image}" alt="${item.title}">
                <p>${item.content}</p>
            `;
        }

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">×</span>
                ${contentHTML}
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close-button').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // --- Sección Catas y Eventos (Google Maps) ---

    // Función de inicialización del mapa (llamada por el script de Google Maps API)
    window.initMap = () => {
        // Coordenadas de Aranda de Duero, Castile and León, Spain como centro inicial
        const arandaDeDuero = { lat: 41.6749, lng: -3.6874 };

        map = new google.maps.Map(document.getElementById("map"), {
            center: arandaDeDuero,
            zoom: 7, // Un zoom que muestre una región amplia pero con detalle
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        });

        loadTastingsOnMap(); // Carga los marcadores una vez que el mapa esté listo
    };

    // Cargar y mostrar marcadores de catas en el mapa
    function loadTastingsOnMap() {
        // Limpiar marcadores existentes
        markers.forEach(marker => marker.setMap(null));
        markers = [];

        const tastings = getTastings();
        const infoWindow = new google.maps.InfoWindow(); // Una sola ventana de información

        tastings.forEach(tasting => {
            const marker = new google.maps.Marker({
                position: { lat: tasting.latitude, lng: tasting.longitude },
                map: map,
                title: tasting.name,
                // Puedes personalizar el icono del marcador si tienes imágenes de iconos personalizados
                // icon: 'path/to/custom-icon.png'
            });

            // Al hacer clic en un marcador, mostrar la ventana de información y los detalles en la div
            marker.addListener('click', () => {
                infoWindow.setContent(`
                    <div class="map-info-window">
                        <h4>${tasting.name}</h4>
                        <p>${tasting.address}</p>
                        <p>${tasting.date}</p>
                        <p>Haz clic para ver más detalles.</p>
                    </div>
                `);
                infoWindow.open(map, marker);
                displayTastingDetails(tasting);
            });

            markers.push(marker);
        });

        // Si no hay catas, muestra un mensaje por defecto en tastingDetailsDiv
        if (tastings.length === 0) {
            tastingDetailsDiv.innerHTML = '<p>No hay eventos de cata programados actualmente. Vuelve pronto para descubrir nuevas experiencias.</p>';
        } else {
             // Muestra los detalles de la primera cata por defecto o un mensaje genérico
            displayTastingDetails(tastings[0]); // Muestra detalles de la primera cata al cargar
        }
    }

    // Mostrar detalles de la cata seleccionada en la div tastingDetails
    function displayTastingDetails(tasting) {
        tastingDetailsDiv.innerHTML = `
            <h3>${tasting.name}</h3>
            <p><strong>Fecha:</strong> ${tasting.date}</p>
            <p><strong>Hora:</strong> ${tasting.time}</p>
            <p><strong>Lugar:</strong> ${tasting.address}, ${tasting.city}</p>
            <p><strong>Descripción:</strong> ${tasting.description}</p>
            <p><strong>Bodega Anfitriona:</strong> ${tasting.hostWinery}</p>
            <p><strong>Contacto:</strong> <a href="mailto:${tasting.contactEmail}">${tasting.contactEmail}</a></p>
            ${tasting.registrationLink ? `<p><a href="${tasting.registrationLink}" target="_blank" class="call-to-action-btn small-btn">Inscribirse</a></p>` : ''}
        `;
    }document.addEventListener('DOMContentLoaded', () => {
    // --- Datos JSON Integrados (Simulación de API) ---
    const data = {
        "wines": [
            {
                "id": 1,
                "name": "Borgon Reserva Especial",
                "winery": "Bodegas Borgon",
                "region": "Ribera del Duero",
                "grape": "Tempranillo",
                "vintage": 2018,
                "image": "images/wine1.jpg", // Usa tus propias imágenes
                "notes": "Color rojo picota intenso con ribete granate. En nariz, aromas complejos a frutos rojos maduros (cereza, ciruela), notas especiadas de vainilla y clavo, y un fondo balsámico y tostado procedente de su larga crianza en barrica de roble francés y americano. En boca es potente, estructurado y elegante, con taninos redondos y sedosos. Final largo y persistente, dejando sensaciones de fruta madura y cacao.",
                "pairing": "Cordero asado, cochinillo, chuletón de buey, quesos muy curados como el Manchego o el Idiazábal.",
                "temperature": "16-18°C",
                "alcohol": "14.5%",
                "body": "Full",
                "acidity": "Medium-High",
                "tannins": "High",
                "price": 35.50,
                "isPremium": true
            },
            {
                "id": 2,
                "name": "Borgon Crianza Selección",
                "winery": "Bodegas Borgon",
                "region": "Rioja",
                "grape": "Tempranillo, Garnacha",
                "vintage": 2020,
                "image": "images/wine2.jpg",
                "notes": "Rojo cereza brillante con destellos rubí. Nariz expresiva donde destacan las frutas del bosque frescas (frambuesa, fresa) entrelazadas con notas de regaliz, vainilla y un sutil toque tostado. En boca es equilibrado, fresco y de paso amable, con taninos pulidos y una acidez bien integrada que invita a seguir bebiendo.",
                "pairing": "Embutidos ibéricos, carnes a la brasa, pasta con salsa boloñesa, estofados ligeros y quesos semicurados.",
                "temperature": "14-16°C",
                "alcohol": "13.5%",
                "body": "Medium",
                "acidity": "Medium",
                "tannins": "Medium",
                "price": 18.90,
                "isPremium": false
            },
            {
                "id": 3,
                "name": "Borgon Tinto Joven",
                "winery": "Bodegas Borgon",
                "region": "Toro",
                "grape": "Tinta de Toro (Tempranillo)",
                "vintage": 2023,
                "image": "images/wine3.jpg",
                "notes": "Color violeta intenso con reflejos azulados, denotando su juventud. En nariz, explosión de aromas a frutos negros (mora, ciruela) y rojos (frambuesa) frescos, con toques florales de violeta. En boca es potente y carnoso, pero a la vez jugoso y vibrante, con taninos presentes pero muy suaves y una acidez refrescante que lo hace muy fácil de beber.",
                "pairing": "Tapas variadas, arroces de carne o verduras, pizzas, quesos frescos y embutidos.",
                "temperature": "12-14°C",
                "alcohol": "14%",
                "body": "Medium-Full",
                "acidity": "High",
                "tannins": "Medium-Low",
                "price": 12.00,
                "isPremium": false
            },
            {
                "id": 4,
                "name": "Borgon Merlot del Valle",
                "winery": "Bodegas Borgon",
                "region": "Valle de Maipo (Chile)",
                "grape": "Merlot",
                "vintage": 2021,
                "image": "images/wine4.jpg",
                "notes": "Rojo rubí brillante. En nariz, aromas intensos a frutas rojas y negras maduras (ciruela, cassis) con delicadas notas de vainilla, chocolate y un fondo herbáceo. En boca es suave y redondo, con taninos dulces y bien integrados. Final sedoso y persistente que invita a un segundo trago.",
                "pairing": "Pollo asado, salmón a la plancha, cerdo agridulce, quesos suaves como el Brie o Camembert.",
                "temperature": "15-17°C",
                "alcohol": "13%",
                "body": "Medium",
                "acidity": "Medium",
                "tannins": "Medium",
                "price": 22.75,
                "isPremium": false
            },
            {
                "id": 5,
                "name": "Borgon Gran Reserva Centenario",
                "winery": "Bodegas Borgon",
                "region": "Priorat",
                "grape": "Garnacha, Cariñena",
                "vintage": 2012,
                "image": "images/wine5.jpg",
                "notes": "Un vino de guarda excepcional. Color cereza picota con ribete teja. Aromas complejos a fruta negra confitada, hierbas aromáticas, mina de lápiz y especias exóticas. Boca potente, densa, con taninos nobles y una acidez vibrante que promete una gran longevidad. Final muy largo y mineral.",
                "pairing": "Platos de caza mayor, estofados de larga cocción, chocolate negro de alta pureza.",
                "temperature": "18°C",
                "alcohol": "15%",
                "body": "Full",
                "acidity": "High",
                "tannins": "High",
                "price": 95.00,
                "isPremium": true
            },
            {
                "id": 6,
                "name": "Borgon Tempranillo Ecológico",
                "winery": "Bodegas Borgon",
                "region": "Rioja Alavesa",
                "grape": "Tempranillo",
                "vintage": 2022,
                "image": "images/wine6.jpg",
                "notes": "Vino joven y vibrante de cultivo ecológico. Rojo cereza con destellos violáceos. Aromas intensos a frutos rojos y negros frescos, con notas de flores y un toque balsámico. Fresco y frutal en boca, con taninos suaves y una acidez bien integrada. Perfecto para disfrutar en cualquier momento.",
                "pairing": "Verduras a la brasa, carnes blancas, arroces vegetarianos.",
                "temperature": "13-15°C",
                "alcohol": "13%",
                "body": "Light-Medium",
                "acidity": "Medium",
                "tannins": "Medium-Low",
                "price": 14.50,
                "isPremium": false
            }
        ],
        "articles": [
            {
                "id": 1,
                "title": "Guía de Cata para Principiantes: Descifra los Secretos del Vino Tinto",
                "summary": "Sumérgete en el arte de la cata. Aprende a diferenciar aromas y texturas en tu vino tinto favorito con nuestra guía paso a paso.",
                "content": "La cata de vino es mucho más que beber; es una experiencia sensorial que se aprende con la práctica. Primero, observa el **color** y su intensidad: ¿es un rojo cereza brillante, un rubí intenso o un picota casi opaco? Esto te dará pistas sobre la edad y la variedad de uva. Luego, llega el momento de los **aromas**. Gira suavemente la copa para liberar los compuestos volátiles y detecta notas de frutas, flores, especias, madera o incluso minerales. Finalmente, saborea el vino, prestando atención a su **cuerpo** (ligero, medio, pleno), la **acidez** (refrescante, punzante), los **taninos** (astringentes, sedosos) y el **final** (la persistencia de los sabores en boca). ¡Con práctica, te convertirás en un experto!",
                "image": "https://source.unsplash.com/featured/300x180/?wine-tasting,sommelier"
            },
            {
                "id": 2,
                "title": "Descubriendo la Rioja: Cuna del Tempranillo y la Tradición Vinícola Española",
                "summary": "Un viaje apasionante por la región vinícola más famosa de España, hogar de vinos con historia y un sabor inconfundible.",
                "content": "La **Denominación de Origen Calificada Rioja** es, sin lugar a dudas, la región vinícola más emblemática de España. Sus viñedos, distribuidos a lo largo del río Ebro, gozan de un clima y unos suelos ideales para la viticultura. La **uva Tempranillo** es la reina indiscutible de Rioja, responsable de sus característicos vinos tintos, conocidos por su equilibrio, estructura y capacidad de envejecimiento. Los vinos de Rioja se clasifican tradicionalmente en Joven, Crianza, Reserva y Gran Reserva, cada uno con distintos requisitos de envejecimiento en barrica y botella, lo que permite disfrutar de una amplia gama de estilos, desde los más frescos y frutales hasta los más complejos y evolucionados.",
                "image": "https://source.unsplash.com/featured/300x180/?vineyard,rioja"
            },
            {
                "id": 3,
                "title": "El Arte del Maridaje: Encuentra la Combinación Perfecta para tu Vino Tinto",
                "summary": "Desvela los secretos para combinar vinos tintos con tus platos favoritos y eleva tu experiencia gastronómica.",
                "content": "El maridaje es el arte de combinar alimentos y vinos de forma que se potencien mutuamente, creando una armonía de sabores. Para los vinos tintos, la regla general es maridar la intensidad del vino con la intensidad de la comida. Vinos tintos ligeros y afrutados (como un Pinot Noir o un Garnacha joven) combinan bien con pollo, pescado azul o pastas con salsas suaves. Los tintos de cuerpo medio (como un Crianza de Rioja o un Merlot) son excelentes con carnes a la brasa, embutidos y quesos semicurados. Finalmente, los tintos potentes y estructurados (como un Ribera del Duero Reserva o un Cabernet Sauvignon) son ideales para carnes rojas asadas, caza y quesos muy curados. Experimenta y descubre tus combinaciones favoritas.",
                "image": "https://source.unsplash.com/featured/300x180/?food-wine,pairing"
            }
        ],
        "tastings": [
            {
                "id": 1,
                "name": "Cata Vertical Bodegas Borgon Reserva",
                "date": "15 de Agosto de 2025",
                "time": "18:00",
                "address": "Calle del Vino, 10",
                "city": "Aranda de Duero",
                "description": "Una experiencia única para explorar la evolución de nuestro Borgon Reserva Especial a través de varias añadas. Descubre la magia del envejecimiento.",
                "hostWinery": "Bodegas Borgon",
                "contactEmail": "catas@vinotintoborgon.com",
                "registrationLink": "https://example.com/registro-cata1",
                "latitude": 41.6749,
                "longitude": -3.6874
            },
            {
                "id": 2,
                "name": "Maridaje de Vinos de Toro y Quesos",
                "date": "1 de Septiembre de 2025",
                "time": "19:30",
                "address": "Plaza Mayor, 5",
                "city": "Toro",
                "description": "Explora la potencia de los vinos de Toro en armonía con una selección de quesos locales e internacionales.",
                "hostWinery": "Enoteca El Duero",
                "contactEmail": "info@enotecaduero.com",
                "registrationLink": null,
                "latitude": 41.5235,
                "longitude": -5.3941
            },
            {
                "id": 3,
                "name": "Introducción a los Vinos de Rioja",
                "date": "20 de Septiembre de 2025",
                "time": "17:00",
                "address": "Av. de Mendavia, 12",
                "city": "Logroño",
                "description": "Un curso intensivo para principiantes sobre las variedades, regiones y características de los vinos de Rioja.",
                "hostWinery": "Centro de la Cultura del Vino",
                "contactEmail": "cursos@cultur
});