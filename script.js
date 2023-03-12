// Images

const images = document.querySelectorAll("img.left-pane--image")

const immeubleBastille = document.querySelector("#immeuble-bastille");
const neueNationalgalerie = document.querySelector("#neue-nationalgalerie");
const armstrongRubber = document.querySelector("#armstrong-rubber-hq");
const maisonLatapie = document.querySelector("#maison-latapie");
const immeubleVerdeaux = document.querySelector("#immeuble-verdeaux");
const openOrientedObjects = document.querySelector("#open-oriented-objects");

const imgImmeubleBastille = document.querySelector("#img-immeubleBastille")
const imgNeueNationalgalerie = document.querySelector("#img-neueNationalgalerie");
const imgArmstrongRubber = document.querySelector("#img-armstrongRubber");
const imgMaisonLatapie = document.querySelector("#img-maisonLatapie");
const imgImmeubleVerdeaux = document.querySelector("#img-immeubleVerdeaux");
const imgOpenOrientedObjects = document.querySelector("#img-openOrientedObjects");

const leftPane = document.querySelector(".left-pane");
const rightPane = document.querySelector(".right-pane");

leftPane.addEventListener("click", function() {
  if (window.innerWidth > 925) {
    if (leftPane.classList.contains('zoom')) {
      leftPane.classList.remove('zoom');
      rightPane.classList.remove('zoom');
    } else {
      leftPane.classList.add('zoom');
      rightPane.classList.add('zoom');
    }
  }
});

immeubleBastille.addEventListener("click", function() {
  images.forEach((image) => {
    image.classList.remove('visible');
  });
  imgImmeubleBastille.classList.add('visible');
  scrollToTop();
});

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

const infoModalOpener = document.querySelector("#info-modal-opener");
const infoModal = document.querySelector("#info-modal");
const infoModalContent = document.querySelector("#info-modal-content");
const techModalOpener = document.querySelector("#tech-modal-opener");
const techModal = document.querySelector("#tech-modal");
const techModalContent = document.querySelector("#tech-modal-content");
const modalLinks = document.querySelectorAll(".modal-link");

infoModalOpener.addEventListener('click', function (e) {
  e.preventDefault();
  infoModal.classList.add('open');
  infoModalContent.style.display = "block";
})

infoModal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-link')) {
    e.stopPropagation();
  } else {
    e.preventDefault();
    infoModal.classList.remove('open');
    infoModalContent.style.display = "none";
  }
});

techModalOpener.addEventListener('click', function (e) {
  e.preventDefault();
  techModal.classList.add('open');
  techModalContent.style.display = "block";
})

techModal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-link')) {
    e.stopPropagation();
  } else {
    e.preventDefault();
    techModal.classList.remove('open');
    techModalContent.style.display = "none";
  }
});

// Current year

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Scroll to top function, when mobile

function scrollToTop() {
  if (window.innerWidth < 925) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scrollToBottom() {
  if (window.innerWidth > 925) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

// Loader

window.addEventListener("load", function() {
  const loadingPage = document.querySelector("#loading");
  const content = document.querySelector("#content");
  const backdrops = document.querySelectorAll(".backdrop");

  loadingPage.style.display = "none";
  content.style.display = "block";
  backdrops.forEach((backdrop) => {
    backdrop.style.display = "flex"; 
  })
});