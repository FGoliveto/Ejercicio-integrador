const valor = 200;
let total;

let importe = document.getElementById("resumenDeComprador").addEventListener("click", (categoria, cantidad) => {
    categoria = document.getElementById("categoriaDeComprador");
    cantidad = document.getElementById("cantidadDeComprador").value;
    document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $";
    console.log(categoria + " // " + cantidad);
    console.log(categoria.options[categoria.selectedIndex].text);
    console.log(Number.isInteger(parseFloat(cantidad)));
    if(parseFloat(cantidad)>0 && Number.isInteger(parseFloat(cantidad))){
        switch (categoria.options[categoria.selectedIndex].text) {
            case "Estudiante":
                console.log("entro a "+categoria.options[categoria.selectedIndex].text);                total = (valor * 0.2) * cantidad;
                total = (valor * 0.2) * cantidad;
                console.log(total);
                break;
            case "Trainee":
                console.log("entro a "+categoria.options[categoria.selectedIndex].text);
                total = (valor * 0.5) * cantidad;
                break;
            case "Junior":
                console.log("entro a "+categoria.options[categoria.selectedIndex].text);
                total = (valor * 0.85) * cantidad;
                break;
            default:
        }
        document.getElementById("totalAPagar").innerHTML = document.getElementById("totalAPagar").innerText + total;
    }else{
        alert("Error al ingresar la cantidad, debe ser un valor entero positivo");
        document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $";
        document.getElementById("cantidadDeComprador").value= document.getElementById("cantidadDeComprador").defaultValue;
    }
    return;
});