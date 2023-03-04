// Images
const images = document.querySelectorAll("img.left-pane--image")

const neueNationalgalerie = document.querySelector("#neue-nationalgalerie");
const armstrongRubber = document.querySelector("#armstrong-rubber-hq");
const maisonLatapie = document.querySelector("#maison-latapie");
const immeubleVerdeaux = document.querySelector("#immeuble-verdeaux");
const openOrientedObjects = document.querySelector("#open-oriented-objects");

const imgNeueNationalgalerie = document.querySelector("#img-neueNationalgalerie");
const imgArmstrongRubber = document.querySelector("#img-armstrongRubber");
const imgMaisonLatapie = document.querySelector("#img-maisonLatapie");
const imgImmeubleVerdeaux = document.querySelector("#img-immeubleVerdeaux");
const imgOpenOrientedObjects = document.querySelector("#img-openOrientedObjects");


neueNationalgalerie.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgNeueNationalgalerie.classList.add('visible');
  scrollToTop();
});

armstrongRubber.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgArmstrongRubber.classList.add('visible');
  scrollToTop();
});

maisonLatapie.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgMaisonLatapie.classList.add('visible');
  scrollToTop();
});

immeubleVerdeaux.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgImmeubleVerdeaux.classList.add('visible');
  scrollToTop();
});

openOrientedObjects.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgOpenOrientedObjects.classList.add('visible');
  scrollToTop();
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

// Scroll to top function, when mobile

function scrollToTop() {
  if (window.innerWidth < 956) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}