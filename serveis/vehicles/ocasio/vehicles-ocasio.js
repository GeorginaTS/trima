const list = document.getElementById("vehicles-list");
const li = document.createElement("li");

vehicles.forEach((vehicle) => {
  const li = document.createElement("li");
  li.innerHTML = `
            <a href="./?id=${vehicle.id}">
            <div class="img" style="background-image: url('./img/vehicle${vehicle.id}.jpg');"></div>
            <div>
              <h4>${vehicle.title}</h4>
              <p>Quilometratge: ${vehicle.km} km <br>Preu: ${vehicle.price}</p>
            </div></a>`          
  list.appendChild(li); 
});

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
 const article = document.getElementById("vehicle-detail");
if (id > 0) {
  const vehicleDetall = vehicles.find((vehicle) => vehicle.id == id);
  console.log(vehicleDetall)
  article.innerHTML = `
    <div><h4> ${vehicleDetall.title}</h4><div id="close">x</div></div><hr>
    <div><div style="background-color: white;"><img src="./img/vehicle${vehicleDetall.id}.jpg" alt="${vehicleDetall.title}"></div><div style="min-width: 50%"><p>Marca /Model:${vehicleDetall.marca} ${vehicleDetall.model}<br>Any: ${vehicleDetall.year} - ${vehicleDetall.type} <br>Color: ${vehicleDetall.color} - ${vehicleDetall.doors} portes</p><p>Quilometratge: ${vehicleDetall.km} km <br>Preu: ${vehicleDetall.price}</p><p>Cilindrada: ${vehicleDetall.cilindrada} <br>CV: ${vehicleDetall.cv}</p></div></div>
    <hr><p>${vehicleDetall.description}</p>` 
} else {
  article.style.display = "none";

}
const close = document.getElementById("close");
close.addEventListener("click", () => {
  article.style.display = "none";
});