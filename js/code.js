document.getElementById("servicio").addEventListener("click",function(e){
    mostrarServicios(e);
})

document.getElementById("inicio").addEventListener("click",function(e){
    mostrarInicio(e)
})

document.getElementById("inicioFooter").addEventListener("click",function(e){
    mostrarInicio(e);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

document.getElementById("serviviosFooter").addEventListener("click",function(e){
    mostrarServicios(e);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

document.getElementById("alimentos").addEventListener("click", function(e){
    mostrarAlimentos(e);
})

document.getElementById("autopartes").addEventListener("click", function(e){
    mostrarAutopartes(e);
})

document.getElementById("autos").addEventListener("click", function(e){
    mostrarAutos(e);
})

document.getElementById("outdoor").addEventListener("click", function(e){
    mostrarOutdoor(e)
})

function mostrarServicios(e){
    e.preventDefault();
    let inicio = document.getElementById("contenedorInicio");
    inicio.style.display = "none";
    let servicios = document.getElementById("contenedorServicios");
    servicios.style.display = "flex";

    document.getElementById("inicio").classList.add ("sombra");
    document.getElementById("servicio").classList.remove ("sombra");
}

function mostrarInicio(e){
    e.preventDefault();
    let inicio = document.getElementById("contenedorInicio");
    inicio.style.display = "flex";
    let servicios = document.getElementById("contenedorServicios");
    servicios.style.display = "none";

    document.getElementById("inicio").classList.remove ("sombra");
    document.getElementById("servicio").classList.add ("sombra");
}

function mostrarAlimentos(e){
    e.preventDefault();

    document.getElementById("alimentos").classList.add("icoSeleccionado");
    document.getElementById("alimentos").classList.remove("icoNoSeleccionado")
    document.getElementById("autopartes").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.remove("icoSeleccionado")
    document.getElementById("autos").classList.add("icoNoSeleccionado")
    document.getElementById("autos").classList.remove("icoSeleccionado")
    document.getElementById("outdoor").classList.add("icoNoSeleccionado")
    document.getElementById("outdoor").classList.remove("icoSeleccionado")

    let alimentos = document.getElementById("contenedorAlimentos");
    alimentos.style.display = "block";
    let autopartes = document.getElementById("contenedorAutopartes");
    autopartes.style.display = "none";
    document.getElementById("contenedorAuto").style.display = "none";
    document.getElementById("contenedorOutdoor").style.display = "none";
}

function mostrarAutopartes(e){
    e.preventDefault();
    
    document.getElementById("alimentos").classList.remove("icoSeleccionado");
    document.getElementById("alimentos").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.remove("icoNoSeleccionado")
    document.getElementById("autopartes").classList.add("icoSeleccionado")
    document.getElementById("autos").classList.add("icoNoSeleccionado")
    document.getElementById("autos").classList.remove("icoSeleccionado")
    document.getElementById("outdoor").classList.add("icoNoSeleccionado")
    document.getElementById("outdoor").classList.remove("icoSeleccionado")

    let alimentos = document.getElementById("contenedorAlimentos");
    alimentos.style.display = "none";
    let autopartes = document.getElementById("contenedorAutopartes");
    autopartes.style.display = "block";
    document.getElementById("contenedorAuto").style.display = "none";
    document.getElementById("contenedorOutdoor").style.display = "none";
}

function mostrarAutos(e){
    e.preventDefault();
    
    document.getElementById("alimentos").classList.remove("icoSeleccionado");
    document.getElementById("alimentos").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.remove("icoSeleccionado")
    document.getElementById("autos").classList.remove("icoNoSeleccionado")
    document.getElementById("autos").classList.add("icoSeleccionado")
    document.getElementById("outdoor").classList.add("icoNoSeleccionado")
    document.getElementById("outdoor").classList.remove("icoSeleccionado")

    document.getElementById("contenedorAlimentos").style.display = "none";
    document.getElementById("contenedorAutopartes").style.display = "none";
    document.getElementById("contenedorAuto").style.display = "block";
    document.getElementById("contenedorOutdoor").style.display = "none";

}

function mostrarOutdoor(e){
    e.preventDefault();
    
    document.getElementById("alimentos").classList.remove("icoSeleccionado");
    document.getElementById("alimentos").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.add("icoNoSeleccionado")
    document.getElementById("autopartes").classList.remove("icoSeleccionado")
    document.getElementById("autos").classList.add("icoNoSeleccionado")
    document.getElementById("autos").classList.remove("icoSeleccionado")
    document.getElementById("outdoor").classList.remove("icoNoSeleccionado")
    document.getElementById("outdoor").classList.add("icoSeleccionado")

    document.getElementById("contenedorAlimentos").style.display = "none";
    document.getElementById("contenedorAutopartes").style.display = "none";
    document.getElementById("contenedorAuto").style.display = "none";
    document.getElementById("contenedorOutdoor").style.display = "block";

}