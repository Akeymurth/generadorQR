//constantes
const inputText = document.getElementById("input-text");
const btnGenerate = document.getElementById("btn-generate");
const btnClear = document.getElementById("btn-clear");
const qrCodeDiv = document.getElementById("qrcode");

//funcion click "generar QR"

btnGenerate.addEventListener("click", () => {
    const inputValue = inputText.value; //obtenemos el valor del input
    if(inputValue){
        qrCodeDiv.innerHTML = "";//limpiamos el div del codigo QR
        const qrcode = new QRCode(qrCodeDiv, {
            text: inputValue,
            width: 200,
            height: 200,
        });
    }
});

//funcion limpiar

btnClear.addEventListener("click", () => {
    inputText.value = "";//limpiamos el input
    qrCodeDiv.innerHTML = "";//limpiamos el div del QR
});

