const list = document.getElementById("vehicles-list");
const li = document.createElement("li");

vehicles.forEach((vehicle) => {
  const li = document.createElement("li");
  li.innerHTML = `
            <a href="./?id=${vehicle.id}">
            <img src="./img/vehicle${vehicle.id}-1.jpg" alt="${vehicle.title}" >

            <div>
              <h4>${vehicle.title}</h4>
              <p>Quilometratge: ${vehicle.km} km <br>Preu: ${vehicle.price}</p>
            </div></a>`;
  list.appendChild(li);
});

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const article = document.getElementById("vehicle-detail");
if (id > 0) {
  const vehicleDetall = vehicles.find((vehicle) => vehicle.id == id);
  console.log(vehicleDetall);
  article.innerHTML = `
    <div>
    <h4> ${vehicleDetall.title}</h4>
    <div id="close">x</div></div>
    <hr>
    <div style="display:grid; grid-template-columns: 2fr 1fr;">
    <div class="container-img" style="width: 100%"></div>
    <div><p style="font-size: 1.2rem;">Marca /Model:${vehicleDetall.marca} ${vehicleDetall.model}<br>Any: ${vehicleDetall.year} - ${vehicleDetall.type} <br>Color: ${vehicleDetall.color} - ${vehicleDetall.doors} portes</p><p>Quilometratge: ${vehicleDetall.km} km <br>Preu: ${vehicleDetall.price}</p><p>Cilindrada: ${vehicleDetall.cilindrada} <br>CV: ${vehicleDetall.cv}</p></div>
    </div>
    <hr>
    <p>${vehicleDetall.description}</p>
    <p style="display;flex; justify-content: center; text-align: center; font-weight: bold; "> + info : <a href="tel:972 16 99" target="_blank" class="fa fa-phone" style="color: white; font-size: 1.2rem">. 972 16 25 99</a> &nbsp;
    <a href="mailto:info@trimamotor.cat" target="_blank" class="fa-regular fa-envelope" style="color: white; font-size: 1.6rem"></a>  &nbsp;&nbsp; <a href="https://wa.me/34651381675" target="_blank" class="fa fa-whatsapp" style="color: white; font-size: 1.6rem"
        ></a></p>`;
  for (let i = 1; i < 5; i++) {
    checkImageExists(`./img/vehicle${vehicleDetall.id}-${i}.jpg`).then(
      (exists) => {
        console.log(exists, "exists", i);
        if (exists) {
          let image = document.createElement("img");
          image.src = `./img/vehicle${vehicleDetall.id}-${i}.jpg`;
          console.log(image.src);
          image.alt = `${vehicleDetall.title}`;
          image.classList.add("car-img");
          if (i == 1) {
            image.classList.add("large");
          }
          image.addEventListener("click", () => {
            const images = document.querySelectorAll(".car-img");
            images.forEach((i) => i.classList.remove("large"));
            image.classList.add("large");
          });
          article.querySelector(".container-img").appendChild(image);
        }
      }
    );
  }
}

const close = document.getElementById("close");
close.addEventListener("click", () => {
  article.style.display = "none";
});

// Imatges del detail
const images = document.querySelectorAll(".car-img");

images.forEach((image) => {
  console.log("foreach", image);
  image.addEventListener("click", () => {
    // Elimina la classe 'large' de totes
    images.forEach((i) => i.classList.remove("large"));
    // Afegeix 'large' a la imatge clicada
    image.classList.add("large");
  });
});

// Promise-based approach (recommended)
function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    console.log(img, "<-img- url->", url);

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);

    // Set the src AFTER setting up event listeners
    img.src = url;
  });
}
