function saludar() {
    alert("¡Hola! Soy Frank y esta es mi primera página interactiva 🚀");
}
function cambiarMensaje() {

    document.getElementById("mensaje").innerHTML =
        "🚀 Estoy aprendiendo programación en mi MacBook Air M1";

}
let clicks = 0;

function cambiarMensaje() {
    document.getElementById("mensaje").innerHTML =
        "🚀 Estoy aprendiendo programación en mi MacBook Air M1";
}

function contarClicks() {
    clicks++;

    document.getElementById("contador").innerHTML =
        "Has hecho " + clicks + " clics.";
}