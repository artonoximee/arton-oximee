// Images

const neueNationalgalerie = document.querySelector("#neue-nationalgalerie");
const maisonLatapie = document.querySelector("#maison-latapie");
const openOrientedObjects = document.querySelector("#open-oriented-objects");

const image = document.querySelector("#img-viewer");

neueNationalgalerie.addEventListener("click", function() {
  image.src = "imgs/neueNationalgalerie.jpg";
});

maisonLatapie.addEventListener("click", function() {
  image.src = "imgs/maisonLatapie.jpg";
});

openOrientedObjects.addEventListener("click", function() {
  image.src = "imgs/openOrientedObjects.jpg";
});

// Modal

const modalOpener = document.querySelector("#modal-opener");
const modal = document.querySelector("#info-modal");

modalOpener.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('open');
})

modal.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('open');
})