
        document.addEventListener('DOMContentLoaded', () => {
            // Simulate API calls
            const fetchTravelData = async () => {
                // Mock data for hotels, destinations, restaurants, and car rentals
                const mockData = {
                    hoteles: [
                        {
                            id: 1,
                            nombre: "Hotel Gran Vista",
                            ubicacion: "Santorini, Grecia",
                            descripcion: "Disfruta de vistas espectaculares al mar Egeo desde este lujoso hotel.",
                            precio: "€350/noche",
                            imagen: "https://placehold.co/400x250/FFD700/000000?text=Hotel+Santorini"
                        },
                        {
                            id: 2,
                            nombre: "Resort Tropical Paraíso",
                            ubicacion: "Maldivas",
                            descripcion: "Villas sobre el agua con acceso directo a arrecifes de coral.",
                            precio: "€600/noche",
                            imagen: "https://placehold.co/400x250/00CED1/FFFFFF?text=Resort+Maldivas"
                        },
                        {
                            id: 3,
                            nombre: "Chalet Alpino Encantado",
                            ubicacion: "Alpes Suizos",
                            descripcion: "Acogedor chalet con vistas a las montañas nevadas, ideal para esquiar.",
                            precio: "€280/noche",
                            imagen: "https://placehold.co/400x250/8B4513/FFFFFF?text=Chalet+Alpes"
                        },
                        {
                            id: 4,
                            nombre: "Hotel Boutique Histórico",
                            ubicacion: "Roma, Italia",
                            descripcion: "Elegancia clásica en el corazón de la ciudad eterna, cerca de monumentos.",
                            precio: "€220/noche",
                            imagen: "https://placehold.co/400x250/A52A2A/FFFFFF?text=Hotel+Roma"
                        }
                    ],
                    destinos: [
                        {
                            id: 1,
                            nombre: "París, Francia",
                            descripcion: "La ciudad del amor y la luz, con sus icónicos monumentos y cultura.",
                            imagen: "https://placehold.co/300x200/FF6347/FFFFFF?text=Paris"
                        },
                        {
                            id: 2,
                            nombre: "Kioto, Japón",
                            descripcion: "Templos antiguos, jardines zen y la belleza de la tradición japonesa.",
                            imagen: "https://placehold.co/300x200/8A2BE2/FFFFFF?text=Kioto"
                        },
                        {
                            id: 3,
                            nombre: "Ciudad del Cabo, Sudáfrica",
                            descripcion: "Impresionantes paisajes naturales y una vibrante vida urbana.",
                            imagen: "https://placehold.co/300x200/008080/FFFFFF?text=Ciudad+del+Cabo"
                        },
                        {
                            id: 4,
                            nombre: "Río de Janeiro, Brasil",
                            descripcion: "Playas famosas, samba y el Cristo Redentor te esperan.",
                            imagen: "https://placehold.co/300x200/FFD700/000000?text=Rio"
                        },
                        {
                            id: 5,
                            nombre: "Nueva York, EE.UU.",
                            descripcion: "La ciudad que nunca duerme, con rascacielos y una energía inigualable.",
                            imagen: "https://placehold.co/300x200/4682B4/FFFFFF?text=NY"
                        },
                        {
                            id: 6,
                            nombre: "Sídney, Australia",
                            descripcion: "La Ópera de Sídney, playas y una vida al aire libre fascinante.",
                            imagen: "https://placehold.co/300x200/DAA520/000000?text=Sydney"
                        }
                    ],
                    restaurantes: [
                        {
                            id: 1,
                            nombre: "El Sabor del Mar",
                            ubicacion: "Barcelona, España",
                            especialidad: "Mariscos frescos y paellas tradicionales.",
                            imagen: "https://placehold.co/400x250/20B2AA/FFFFFF?text=Mariscos"
                        },
                        {
                            id: 2,
                            nombre: "La Trattoria Toscana",
                            ubicacion: "Florencia, Italia",
                            especialidad: "Pasta casera y vinos de la región.",
                            imagen: "https://placehold.co/400x250/CD5C5C/FFFFFF?text=Trattoria"
                        },
                        {
                            id: 3,
                            nombre: "Spice Route",
                            ubicacion: "Bangkok, Tailandia",
                            especialidad: "Auténtica cocina tailandesa con un toque moderno.",
                            imagen: "https://placehold.co/400x250/D2B48C/000000?text=Tailandes"
                        }
                    ],
                    coches: [
                        {
                            id: 1,
                            marca: "Mercedes-Benz",
                            modelo: "Clase S",
                            tipo: "Sedán de Lujo",
                            precio: "€150/día",
                            imagen: "https://placehold.co/400x250/C0C0C0/000000?text=Mercedes+S"
                        },
                        {
                            id: 2,
                            marca: "Porsche",
                            modelo: "911 Carrera",
                            tipo: "Deportivo",
                            precio: "€300/día",
                            imagen: "https://placehold.co/400x250/A9A9A9/000000?text=Porsche+911"
                        },
                        {
                            id: 3,
                            marca: "Range Rover",
                            modelo: "Velar",
                            tipo: "SUV Premium",
                            precio: "€200/día",
                            imagen: "https://placehold.co/400x250/808080/FFFFFF?text=Range+Rover"
                        }
                    ]
                };

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                return mockData;
            };

            const displayHoteles = (hoteles) => {
                const container = document.getElementById('hoteles-container');
                container.innerHTML = ''; // Clear loading message
                hoteles.forEach(hotel => {
                    const hotelCard = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-effect">
                            <img src="${hotel.imagen}" alt="${hotel.nombre}" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2 text-blue-800">${hotel.nombre}</h3>
                                <p class="text-gray-600 mb-2">${hotel.ubicacion}</p>
                                <p class="text-gray-700 text-sm mb-3">${hotel.descripcion}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-lg font-bold text-green-600">${hotel.precio}</span>
                                    <button class="btn-primary text-sm">Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += hotelCard;
                });
            };

            const displayDestinos = (destinos) => {
                const container = document.getElementById('destinos-container');
                container.innerHTML = ''; // Clear loading message
                destinos.forEach(destino => {
                    const destinoCard = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-effect">
                            <img src="${destino.imagen}" alt="${destino.nombre}" class="w-full h-40 object-cover">
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-blue-800">${destino.nombre}</h3>
                                <p class="text-gray-600 text-sm">${destino.descripcion}</p>
                                <button class="btn-secondary text-xs mt-3">Explorar</button>
                            </div>
                        </div>
                    `;
                    container.innerHTML += destinoCard;
                });
            };

            const displayRestaurantes = (restaurantes) => {
                const container = document.getElementById('restaurantes-container');
                container.innerHTML = ''; // Clear loading message
                restaurantes.forEach(restaurante => {
                    const restauranteCard = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-effect">
                            <img src="${restaurante.imagen}" alt="${restaurante.nombre}" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2 text-blue-800">${restaurante.nombre}</h3>
                                <p class="text-gray-600 mb-2">${restaurante.ubicacion}</p>
                                <p class="text-gray-700 text-sm mb-3">Especialidad: ${restaurante.especialidad}</p>
                                <button class="btn-primary text-sm">Reservar</button>
                            </div>
                        </div>
                    `;
                    container.innerHTML += restauranteCard;
                });
            };

            const displayCoches = (coches) => {
                const container = document.getElementById('coches-container');
                container.innerHTML = ''; // Clear loading message
                coches.forEach(coche => {
                    const cocheCard = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-effect">
                            <img src="${coche.imagen}" alt="${coche.marca} ${coche.modelo}" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2 text-blue-800">${coche.marca} ${coche.modelo}</h3>
                                <p class="text-gray-600 mb-2">${coche.tipo}</p>
                                <p class="text-gray-700 text-sm mb-3">Precio: ${coche.precio}</p>
                                <button class="btn-primary text-sm">Alquilar</button>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cocheCard;
                });
            };

            // Fetch and display data
            fetchTravelData().then(data => {
                displayHoteles(data.hoteles);
                displayDestinos(data.destinos);
                displayRestaurantes(data.restaurantes);
                displayCoches(data.coches); // Display car data
            }).catch(error => {
                console.error("Error fetching travel data:", error);
                document.getElementById('hoteles-container').innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar hoteles. Inténtalo de nuevo más tarde.</p>';
                document.getElementById('destinos-container').innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar destinos. Inténtalo de nuevo más tarde.</p>';
                document.getElementById('restaurantes-container').innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar restaurantes. Inténtalo de nuevo más tarde.</p>';
                document.getElementById('coches-container').innerHTML = '<p class="text-red-500 text-center col-span-full">Error al cargar coches. Inténtalo de nuevo más tarde.</p>';
            });

            // Questionnaire Form Submission
            const questionnaireForm = document.getElementById('questionnaire-form');
            const questionnaireMessage = document.getElementById('questionnaire-message');

            questionnaireForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission

                const formData = new FormData(questionnaireForm);
                const data = {};
                for (let [key, value] of formData.entries()) {
                    data[key] = value;
                }

                console.log("Respuestas del cuestionario:", data);

                // Simulate sending data to a server
                setTimeout(() => {
                    questionnaireForm.reset(); // Clear the form
                    questionnaireMessage.classList.remove('hidden'); // Show success message
                    setTimeout(() => {
                        questionnaireMessage.classList.add('hidden'); // Hide message after a few seconds
                    }, 5000);
                }, 1000);
            });
        });

