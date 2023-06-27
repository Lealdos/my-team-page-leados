const imgs = [
  { src: "/src/img/photo1.png", tittle: "Product owner", name: "Bill Mahoney" },
  { src: "/src/img/developer.jpg", tittle: "Developer", name: "Jose Delgado" },
  { src: "/src/img/photo2.png", tittle: "Art director ", name: "Saba Cabrera" },
  { src: "/src/img/photo4.png", tittle: "Skylah Lu", name: "Skylah Lu" },
  { src: "/src/img/photo3.png", tittle: "Tech Lead", name: "Skylah Lu" },
  { src: "/src/img/photo5.png", tittle: "Developer", name: "Griff Richards" },
];

const galeryID = document.getElementById("galery");
let photos = "";

function insertElement() {
  imgs.forEach((img,index) => {
    photos = `<div class="member">
    <div class="ocupation"><h4>${img.tittle}</h4>
    </div>
    <img src=${img.src} alt="member${index}"  >
    <h3 class="name">${img.name}</h3>
    </div>`;

    galeryID.innerHTML += photos;
  });
}

insertElement()
