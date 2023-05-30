mostrarImagenes(arrayFavoritosImg, iconoEliminar);

const contadorFavoritos = ()=> {
    const contador = document.querySelector(".contadorFavorito");

    contador.innerHTML = arrayFavoritosImg.length;
}

const eliminarTodasImagenes = ()=>{
    const borrarTodasImagenes = document.querySelector(".borrarTodasImagenes");
    const contenedorGeneralFavoritos = document.querySelector(".grid-conatiner-favoritos");

    borrarTodasImagenes.addEventListener("click", ()=>{
        if(arrayFavoritosImg.length > 0){
            localStorage.clear();
            arrayFavoritosImg.splice(0, arrayFavoritosImg.length);
            contenedorGeneralFavoritos.innerHTML = "";
            contadorFavoritos();
        }
    });
}

const borrarUnaImagen = ()=>{
    let indice;
    const borrar = document.querySelectorAll(".eliminarTacho");

    borrar.forEach(el => {
        el.addEventListener("click", (event)=>{

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1800,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'info',
                title: 'Borraste imagen de favoritos'
            })

            let svg = event.target;
            let divHijo = svg.parentNode;
            let img = divHijo.previousSibling;
            let divContenedor = divHijo.parentNode;

            for(let i=0; i<arrayFavoritosImg.length; i++){
                if(arrayFavoritosImg[i] === img.src){
                    indice = i;
                }   
            }

            arrayFavoritosImg.splice(indice, 1);
            arrayFavoritosImg.splice()
            divContenedor.remove();
            contadorFavoritos();
            guardarFavoritos();

            if(arrayFavoritosImg.length === 0){
                localStorage.clear();
            }
        })
    });
}

function principal (){
    contadorFavoritos();
    eliminarTodasImagenes();
    borrarUnaImagen();
}

principal()