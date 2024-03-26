var impuestos = 10
var puntos  = 10
var windowreference;
function dinerogenera() {
    puntos += 1
    document.getElementById("lolipo").innerHTML = puntos
    console.log(puntos)
    impuestoss()
    console.log(impuestos)
}
function impuestoss() {
    impuestos -= 1
    document.getElementById("impuestos").innerHTML = impuestos
    if (impuestos <= 0) {
        puntos -= 10
        impuestos =  Math.floor(Math.random() * 30 );
    }
    if (puntos <= 0) {
        document.getElementById("perd").innerHTML = "perdisteeee!! bancarota"

    }
}
