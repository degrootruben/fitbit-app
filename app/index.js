import document from "document";

let bg = document.getElementById("background");
let button = document.getElementById("disco");
let disco = false;

button.addEventListener("click", () => {
    disco = !disco;
});

if (disco) {
    setInterval(() => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            bg.style.fill = "#" + randomColor;
    }, 500);
}
