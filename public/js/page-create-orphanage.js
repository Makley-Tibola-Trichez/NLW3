const map = L.map("mapid").setView([-27.2186062,-49.6470661], 15);

//* create and end tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//* create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//* create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer 
    marker = L.marker([lat, lng] , {icon})
    .addTo(map)
})    

//* adicionar o campo de fotos
function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    
    // pegar o container para duplicar .new-uploads
    const fieldsContainer = document.querySelectorAll('.new-uploads')

    // pegar o clone da última imagem adicionada 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]

    if(input.value == ""){ return }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicioanr o clone ao container de #images 
    container.appendChild(newFieldContainer)

}

//* remover links em fotos
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-uploads')


    if(fieldsContainer.length < 2){
        // Limpar o valor do campo
        console.log("oi")
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

//* Select yes or Not
function toggleSelect(event){
    // pegar o botão clicado
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')

    })

    // colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    
    // atualizar o meu input hidden com o valor selecionado 
    const input = document.querySelectorAll('name=["open-on-weekends"]')
    

    // Verificar o valor / sim ou não
    input.value = button.dataset.value

    // retirar a classe .active (dos botões)

    // colocar a classe .active neste botão clicado
 }