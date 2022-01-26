let container = document.querySelector("#numberBox");
let rectangle = document.querySelector("#rectangle");

let initial = 0;

setInterval(() => {
   initial = initial + 1
    console.log(initial)
    container.innerHTML = initial;
    rectangle.style.padding = initial
    if (initial == 99) {
        initial= 0
    }
}, 2000);
