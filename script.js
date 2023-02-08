const maisonLatapie = document.querySelector("#maison-latapie");
const neueNationalgalerie = document.querySelector("#neue-nationalgalerie");

const image = document.querySelector("#img-viewer");

maisonLatapie.addEventListener("click", function() {
  image.src = "imgs/maisonLatapie.jpg";
});

neueNationalgalerie.addEventListener("click", function() {
  image.src = "imgs/neueNationalgalerie.jpg";
});