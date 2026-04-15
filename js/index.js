
//Noticias editables de la tienda

fetch('data/noticias.json')
  .then(response => response.json())
  .then(data => {

    const contenedor = document.getElementById("contenedor-noticias");

    data.forEach(noticia => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.texto}</p>
        `;

        contenedor.appendChild(div);

    });

  })
  .catch(error => console.log("Error:", error));
