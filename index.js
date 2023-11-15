const userInput = document.querySelector("input[type=text]");
const barcodeGeneratorForm = document.querySelector(".barcode-generator-form");
const container = document.querySelector(".container");

const selectorQR = document.querySelector("#radio-1");
const selectorBar = document.querySelector("#radio-2");

const qrcode = document.querySelector("img#qrcode");
const barcode = document.querySelector("svg#barcode");

const appTitle = document.querySelector(".app-title");

let barcodeFlag = true;

const generateBarcode = () => {
    container.classList.add("active");
    const value = userInput.value;
    if (barcodeFlag) {
        setTimeout(() => {
            JsBarcode("#barcode", value, {
                background: "white",
                font: "Rubik"
            });
        }, 200);
    } else {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        qrcode.setAttribute("src", url);
    }
}

const changeToBar = () => {
    appTitle.innerHTML = "Barcode Generator";
    barcode.classList.remove("none");
    qrcode.classList.add("none");
    barcodeFlag = true;
    container.classList.remove("active");
    qrcode.src = "";
    barcode.innerHTML = "";

}

const changeToQR = () => {
    appTitle.innerHTML = "QR Generator";
    qrcode.classList.remove("none");
    barcode.classList.add("none");
    barcodeFlag = false;
    container.classList.remove("active");
    qrcode.src = "";
    barcode.innerHTML = "";
}

selectorQR.addEventListener("change", changeToBar);
selectorBar.addEventListener("change", changeToQR);

barcodeGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userInput.value !== "") {
        generateBarcode();
    }
});