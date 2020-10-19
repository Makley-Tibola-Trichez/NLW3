const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// ! Create map
const map = L.map("mapid", options).setView([-27.2186062,-49.6470661], 15);

// ! create and end tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// ! create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// ! create and add marker
L.marker([-27.2186062,-49.6470661], { icon })
  .addTo(map)

//   ! Image Galery
function selectImage(event){
    const button = event.currentTarget 
    
    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    console.log(buttons)
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button){
        button.classList.remove("active")
    }
    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de Image
    imageContainer.src = image.src

    // Adicionar de volta a classe .active para o botão que foi clicado
    button.classList.add("active")
}