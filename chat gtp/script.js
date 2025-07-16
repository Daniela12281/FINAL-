// Filtrado
const filtro = document.getElementById('filtro');
const cards = document.querySelectorAll('.card');
filtro.addEventListener('change', () => {
  const tipo = filtro.value;
  cards.forEach(c => c.style.display = (tipo==='todos'||c.classList.contains(tipo)) ? 'block' : 'none');
});

// Tema claro/oscuro
const btnTema = document.getElementById('cambiarTema');
btnTema.addEventListener('click', () => {
  const html = document.documentElement;
  if(html.dataset.tema==='oscuro'){
    html.removeAttribute('data-tema');
    btnTema.textContent = '🌙';
  } else {
    html.setAttribute('data-tema','oscuro');
    btnTema.textContent = '☀️';
  }
});

// Formulario simple
const form = document.getElementById('formulario-contacto');
form.addEventListener('submit', e=> {
  e.preventDefault();
  alert('¡Gracias! Pronto te contactaremos.');
  form.reset();
});


