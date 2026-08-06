function mostrar(categoria) {

    const listas = document.querySelectorAll(".lista-productos");

    listas.forEach(lista => {
        if (lista.id !== categoria) {
            lista.style.display = "none";
        }
    });

    const seleccionada = document.getElementById(categoria);

    if (seleccionada.style.display === "block") {
        seleccionada.style.display = "none";
    } else {
        seleccionada.style.display = "block";
        seleccionada.scrollIntoView({
            behavior: "smooth"
        });
    }

}
