fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var container = document.getElementById('container');
    mostrarInformacion('Beagle', data.Beagle);
    mostrarInformacion('Boyero', data.Boyero);
    mostrarInformacion('Caniche', data.Caniche);
    mostrarInformacion('Dalmata', data.Dalmata);
    mostrarInformacion('Husky', data.Husky);
    mostrarInformacion('Labrador', data.Labrador);
    mostrarInformacion('Pastor', data.Pastor);
    mostrarInformacion('Rottweiler', data.Rottweiler);
  })
  .catch(error => console.error('Error al cargar el archivo JSON: ' + error));

function mostrarInformacion(id, raza) {
  var contenedor = document.getElementById(id);

  // Mostrar cabecera
  var cabeceraHTML = `<h2>${raza.cabecera[0].titulo}</h2>`;
  cabeceraHTML += '<div class="section" id="imagenes">';
  raza.cabecera[0].img.forEach(img => {
    cabeceraHTML += `<img src="${img}" alt="Imagen">`;
  });
  cabeceraHTML += '</div>';
  contenedor.innerHTML = cabeceraHTML;

  // Mostrar datos
  var datosHTML = '';
  raza.datos.forEach(dato => {
    datosHTML += `<h3>${dato.titulo}</h3><p>${dato.descripcion}</p>`;
  });
  contenedor.innerHTML += datosHTML;

  // Mostrar características
  var caracHTML = '<h3>Características</h3><ul>';
  raza.caracteristicas.forEach(caracteristica => {
    caracHTML += `<li><p><strong>${caracteristica.titulo}</strong> ${caracteristica.descripcion}</p></li>`;
  });
  caracHTML += '</ul>';
  contenedor.innerHTML += caracHTML;
}
