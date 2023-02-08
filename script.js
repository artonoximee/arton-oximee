// Images
const images = document.querySelectorAll("img.left-pane--image")

const neueNationalgalerie = document.querySelector("#neue-nationalgalerie");
const maisonLatapie = document.querySelector("#maison-latapie");
const openOrientedObjects = document.querySelector("#open-oriented-objects");

const imgNeueNationalgalerie = document.querySelector("#img-neueNationalgalerie");
const imgMaisonLatapie = document.querySelector("#img-maisonLatapie");
const imgOpenOrientedObjects = document.querySelector("#img-openOrientedObjects");


neueNationalgalerie.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgNeueNationalgalerie.classList.add('visible')
});

maisonLatapie.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgMaisonLatapie.classList.add('visible')
});

openOrientedObjects.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgOpenOrientedObjects.classList.add('visible')
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

// Current year

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;