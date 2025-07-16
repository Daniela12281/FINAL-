document.addEventListener('DOMContentLoaded', () => {
  const secciones = {
    destinos: {url:'https://api.example.com/destinos', cont:'destinosGrid'},
    comida: {url:'https://api.example.com/comida', cont:'comidaGrid'},
    playas: {url:'https://api.example.com/playas', cont:'playasGrid'},
    viajes: {url:'https://api.example.com/viajes', cont:'viajesGrid'},
    alquiler: {url:'https://api.example.com/alquiler', cont:'alquilerGrid'},
  };

  function renderCards(data, id){
    const grid = document.getElementById(id);
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(item => {
      grid.innerHTML += `
        <div class="card">
          <img src="${item.imagen}" alt="${item.nombre||item.titulo||item.tipo}">
          <div class="card-body">
            <h3>${item.nombre||item.titulo||item.tipo}</h3>
            ${item.descripcion? `<p>${item.descripcion}</p>`: ''}
            ${item.capacidad? `<p>Capacidad: ${item.capacidad}</p>`: ''}
          </div>
        </div>`;
    });
  }

  async function cargarSeccion(config){
    try {
      const resp = await fetch(config.url);
      const data = await resp.json();
      renderCards(data, config.cont);
    } catch(e){ console.error(e); }
  }

  Object.values(secciones).forEach(cargarSeccion);

  document.getElementById('formContacto').addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje, ' + new FormData(e.target).get('nombre') + '!');
    e.target.reset();
  });
  document.getElementById('formEncuesta').addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Encuesta enviada, gracias por participar!');
    e.target.reset();
  });
});
