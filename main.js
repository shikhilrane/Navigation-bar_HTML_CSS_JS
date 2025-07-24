let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("hamActive");

    let ham_child = hamburger.firstElementChild;
    if (ul.classList.contains("hamActive")) {
        ham_child.classList.replace("fa-bars","fa-xmark")
    }
    else{
        ham_child.classList.replace("fa-xmark","fa-bars")
    }
});