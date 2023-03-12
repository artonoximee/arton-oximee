fetch('db.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  console.log(data);
  appendImages(data.models);
  appendTables(data.models);
  navigation();
  modalLinks();
}

function appendImages(models) {
  const leftPane = document.querySelector('.left-pane');
  leftPane.innerHTML = '';
  for (let i = 0; i < models.length; i++) {
    let image = document.createElement('img');
    image.src = `imgs/${models[i].image}`
    image.alt = models[i].title;
    image.setAttribute('id', `img-${models[i].id}`);
    image.classList.add('left-pane--image');
    if (models[i].cover === "true") {
      image.classList.add('visible');
    }
    leftPane.appendChild(image);
  }
}

function appendTables(models) {
  const rightPaneList = document.querySelector('.right-pane--list');
  rightPaneList.innerHTML = '';
  for (let i = 0; i < models.length; i++) {
    let model = document.createElement('div');
    model.classList.add('right-pane--list--item');
    if (i === 0) {
      model.classList.add('first')
    }
    model.setAttribute('id', `link-${models[i].id}`);
    model.innerHTML = `<p><b>${models[i].title}</b><br/>${models[i].year}</p><p>${models[i].architect}</p>`    
    rightPaneList.appendChild(model);
  }
}

function navigation() {
  const buildings = [
    { building: document.querySelector("#link-1"), image: document.querySelector("#img-1") },
    { building: document.querySelector("#link-2"), image: document.querySelector("#img-2") },
    { building: document.querySelector("#link-3"), image: document.querySelector("#img-3") },
    { building: document.querySelector("#link-4"), image: document.querySelector("#img-4") },
    { building: document.querySelector("#link-5"), image: document.querySelector("#img-5") },
    { building: document.querySelector("#link-6"), image: document.querySelector("#img-6") }
  ];

  buildings.forEach((item) => {
    item.building.addEventListener("click", function() {
      document.querySelectorAll(".visible").forEach((image) => {
        image.classList.remove('visible');
      });
      item.image.classList.add('visible');
      scrollToTop()
    });
  });
}

function scrollToTop() {
  if (window.innerWidth < 925) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function handleModal(modalOpener, modal, modalContent) {
  modalOpener.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('open');
    modalContent.style.display = "block";
  });

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-link')) {
      e.stopPropagation();
    } else {
      e.preventDefault();
      modal.classList.remove('open');
      modalContent.style.display = "none";
    }
  });
}

handleModal(document.querySelector("#info-modal-opener"), document.querySelector("#info-modal"), document.querySelector("#info-modal-content"));
handleModal(document.querySelector("#tech-modal-opener"), document.querySelector("#tech-modal"), document.querySelector("#tech-modal-content"));

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

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