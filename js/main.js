const catTitulo = document.querySelector(".catTitulo");
catTitulo.innerHTML = localStorage.getItem("TiutloCategoria") || "ALEATORIO";
let categoria = localStorage.getItem("Categoria") || "";

const llamadoApi = (categoria, orientacion, tamaño) => {
    let apiKey = `uQQGzD3MEP2Tesrb5JSlKJD2kMnBPFDOE1aNGBtxG6Q`;
    return new Promise((resolve, reject) => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${12}&query=${categoria}&orientation=${orientacion}&w=${tamaño}`)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    arrayImagenes.push(data[i].links.download);
                }
                resolve(arrayImagenes);
            })
            .catch(error => reject(error));
    });
}


const categoriaDesicion = () => {
    const categorias = document.querySelectorAll(".categorias");

    categorias.forEach(element => {
        element.addEventListener("click", (event) => {
            let html = event.target;

            switch (html.innerHTML) {
                case "NATURALEZA":
                    categoria = "Nature";
                    catTitulo.innerHTML = "NATURALEZA";
                    break;
                case "ARQUITECTURA":
                    categoria = "Architecture";
                    catTitulo.innerHTML = "ARQUITECTURA";
                    break;
                case "COMIDA":
                    categoria = "Food";
                    catTitulo.innerHTML = "COMIDA";
                    break;
                case "VIAJES":
                    categoria = "Travel";
                    catTitulo.innerHTML = "VIAJES";
                    break;
                case "ANIMALES":
                    categoria = "Animals";
                    catTitulo.innerHTML = "ANIMALES";
                    break;
                case "PERSONAS":
                    categoria = "People";
                    catTitulo.innerHTML = "PERSONAS";
                    break;
                case "TECNOLOGÍA":
                    categoria = "Technology";
                    catTitulo.innerHTML = "TECNOLOGÍA";
                    break;
                case "DEPORTES":
                    categoria = "Sports";
                    catTitulo.innerHTML = "DEPORTES";
                    break;
                case "EVENTOS":
                    categoria = "Events";
                    catTitulo.innerHTML = "EVENTOS";
                    break;
                case "PAISEAJES":
                    categoria = "Landscapes";
                    catTitulo.innerHTML = "PAISEAJES";
                    break;
                case "ARTE":
                    categoria = "Art";
                    catTitulo.innerHTML = "ARTE";
                    break;
                case "MODA":
                    categoria = "Fashion";
                    catTitulo.innerHTML = "MODA";
                    break;
                default:
                    // Código a ejecutar si no coincide con ningún caso
                    break;
            }

            localStorage.clear();
            localStorage.setItem("Categoria", categoria);
            localStorage.setItem("TiutloCategoria", catTitulo.innerHTML);
            location.reload();
        })
    });
}


const verMasImagenes = () => {
    const verMas = document.querySelector(".verMas");

    verMas.addEventListener("click", async () => {
        await llamadoApi(categoria, "squarish", "regular");
        mostrarImagenes(arrayImagenes, iconoCorazon)

        const gridItem = document.querySelectorAll(".grid-item");
        const ultimasImagenes = Array.from(gridItem).slice(-12);

        for (let i = 0; i < 12; i++) {
            ultimasImagenes[i].classList.add("borrarClases")
        }

        verMas.style.opacity = 0;
    });
}

const contador = () => {
    const contador = document.querySelector(".contador");

    if (contador.innerHTML >= 0) {
        contador.innerHTML = arrayFavoritosImg.length;
    }
}

const agregarImagenFavorito = ()=>{
    const corazon = document.querySelectorAll(".corazon");

    corazon.forEach(el => {
        el.addEventListener("click", (event)=>{
            let svg = event.target;
            let padreSVG = svg.parentNode;
            let img = padreSVG.previousSibling;

            arrayFavoritosImg.push(img.src);
            contador();
            guardarFavoritos()
        });
    });
}

const principal = async () => {
    try {
        categoriaDesicion()
        await llamadoApi(categoria, "squarish", "regular");
        mostrarImagenes(arrayImagenes, iconoCorazon)
        verMasImagenes()
        contador();
        agregarImagenFavorito()

    } catch (error) {
        console.error("Error al llamar al API:", error);
    }
};

principal()