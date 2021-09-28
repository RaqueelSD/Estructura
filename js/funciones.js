autor.addEventListener("mouseover", function () {

    autor.style.color = "red";
    autor.innerText = (autor.innerText).toUpperCase();

}, false)

autor.addEventListener("mouseout", function () {
    autor.style.color = "black";
    autor.innerText = (autor.innerText).toLowerCase();

}, false)




