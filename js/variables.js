const guardarFavoritos = ()=>{
    if(arrayFavoritosImg.length > 0){
        localStorage.setItem("favoritos", JSON.stringify(arrayFavoritosImg));
    }
}

const borraTodo = ()=>{
    localStorage.clear();
}

const arrayImagenes = [];
const arrayFavoritosImg = JSON.parse(localStorage.getItem("favoritos")) || [];

const iconoCorazon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart corazon" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>

<p class="palabraFav">FAV</p>`

const iconoEliminar = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill eliminarTacho" viewBox="0 0 16 16">
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>`;


const mostrarImagenes = (array, icono) => {
    let i = 0;
    array.forEach(url => {
        //Creacion del div
        const div = document.createElement("div");
        div.classList.add("grid-item");

        // Creacion del hijo img
        const img = document.createElement("img");
        img.classList.add("img");
        div.appendChild(img);

        //Creacion del hijo div
        const hijoDiv = document.createElement("div");
        hijoDiv.classList.add("fondo");
        div.appendChild(hijoDiv);

        //icono favorito
        hijoDiv.innerHTML = icono;

        //Ver imagen completa
        const verImagenCompleta = document.createElement("a");
        verImagenCompleta.href = url;
        verImagenCompleta.classList.add("imgCompleta");
        verImagenCompleta.innerHTML = `Ver imagen completa`;
        verImagenCompleta.target = "_blank"
        div.appendChild(verImagenCompleta)


        //Agregar div al contenedor general
        const contenedorGeneral = document.querySelector(".grid-conatiner")
        contenedorGeneral.appendChild(div);

        const selectorImg = document.querySelectorAll(".img");
        selectorImg[i].src = url;
        selectorImg[i].alt = "Imagen";

        i++;
    });
};