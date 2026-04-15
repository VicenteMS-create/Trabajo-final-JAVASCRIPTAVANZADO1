
document.addEventListener("DOMContentLoaded",() => {

  let imagenes = [];
  let indice = 0;

  const img = document.getElementById("imagen");
  const btnNext = document.getElementById("next");
  const btnPrev = document.getElementById("prev");

  fetch("../data/galeria.json")
  .then(res => res.json())
  .then(data => {
    imagenes = data;
    mostrarImagen();
  });
  function mostrarImagen(){
    img.src = imagenes[indice].imagen;
  }
  btnNext.addEventListener("click", () => {
    indice++;
    if(indice >= imagenes.length){
    
    indice = 0;
    }
    mostrarImagen();
  });
  btnPrev.addEventListener("click", () => {
    indice--;
    if (indice < 0) {
      indice = imagenes.length - 1;
    }
    mostrarImagen();
  });
});




