window.addEventListener("load", changeBackground);

function changeBackground() {
    const listImages = ["cataratas.jpg", "machu-picchu.jpg", "perito_moreno.jpg", "roquez.jpg", "tatacoa.jpg", "titicaca.jpg"];
    let index = Math.floor(Math.random() * 6);
    let someImages = listImages[index];
    let pathImages = "../images/" + someImages;
    document.body.style.backgroundImage = "url('" + pathImages + "')";
    document.getElementById("description").innerHTML=getDescription(index);

}
//Devuelve una descripcion de la imagen
function getDescription(idx) {

    let desc;
    if (idx == 0) {
        desc = "Cataratas de Iguazu, Argentina";
    }
    else if (idx == 1) {
        desc = "Machu Picchu, Peru";
    }
    else if (idx == 2) {
        desc = "Glaciar Perito Moreno, Argentina";
    }
    else if (idx == 3) {
        desc = "Los Roques, Venezuela";
    }
    else if (idx == 4) {
        desc = "Desierto de Tatacoa, Colombia";
    }
    else if (idx == 5) {
        desc = "Lago Titicaca, Bolivia";
    }
    return desc;

}
