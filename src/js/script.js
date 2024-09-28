const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const munheco = document.getElementById("munheco");
const textInfo = document.getElementById("textoInfo");
const right = document.getElementById("right");

// Función para mostrar el texto procesado
const showProcessedText = (newvalue) => {
    textFinal.value = newvalue;
    textFinal.classList.add("ajustar");
    right.classList.add("ajuste");
    textoInicial.value = "";
    munheco.classList.add("ocultar");
    textInfo.classList.add("ocultar");
    copy.classList.remove("bn_ocultar");
};

// Resetear el estado de la interfaz
const reset = () => {
    textoInicial.value = "";
    textFinal.value = "";
    right.classList.remove("ajuste");
    textFinal.classList.remove("ajustar");
    munheco.classList.remove("ocultar");
    textInfo.classList.remove("ocultar");
    copy.classList.add("bn_ocultar");
    textoInicial.focus();
};

// Validación de texto
const isValidText = (text) => /^[a-z\s]+$/.test(text);

// Verifica si el texto está encriptado
const isEncrypted = (text) => remplazar.some(([_, encryptedWord]) => text.includes(encryptedWord));

// Array con las palabras clave de encriptación
let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

// Event listener para el botón de encriptar
encriptar.addEventListener("click", () => {
    const texto = textoInicial.value.trim();
    if (texto) {
        if (isValidText(texto)) {
            const encryptedText = remplazar.reduce((acc, [find, replace]) => acc.replaceAll(find, replace), texto);
            showProcessedText(encryptedText);
        } else {
            alert("Ingrese texto con solo letras minúsculas.");
            reset();
        }
    } else {
        // alert("Ingrese texto a encriptar.");
        reset();
    }
});

// Event listener para el botón de desencriptar
desencriptar.addEventListener("click", () => {
    const texto = textoInicial.value.trim();
    if (texto) {
        if (isValidText(texto)) {
            if (isEncrypted(texto)) {
                const decryptedText = remplazar.reduce((acc, [find, replace]) => acc.replaceAll(replace, find), texto);
                showProcessedText(decryptedText);
            } else {
                alert("El texto ingresado no está encriptado.");
                reset();
            }
        } else {
            alert("Ingrese texto con solo letras minúsculas.");
            reset();
        }
    }
});

// Event listener para el botón de copiar
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(textFinal.value).then(() => {
        // alert("Texto copiado al portapapeles.");
    });
    reset();
});

// Ajustar textarea dinámicamente
textoInicial.addEventListener("input", () => {
    textoInicial.style.height = "auto";
    textoInicial.style.height = `${textoInicial.scrollHeight}px`;
});
