const userInput = document.querySelector("input");
const barcodeGeneratorForm = document.querySelector(".barcode-generator-form");
const barcode = document.querySelector("svg#barcode");
const container = document.querySelector(".container");

const generateBarcode = () => {
    container.classList.add("active");
    setTimeout(() => {
        JsBarcode("#barcode", userInput.value, {
            background: "white",
            font: "Rubik"
        });
    }, 200);
}

barcodeGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userInput.value !== "") {
        generateBarcode();
    }
});