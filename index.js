

const list = document.querySelector(".gallery_list")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")

list.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {

        backdrop.classList.remove("hidden"); 
        const choosenImage = event.target.src;
        const largeImage = document.createElement("img")
        largeImage.src = choosenImage;
        largeImage.style.width = "100%"
        largeImage.style.height = "100%"
        modal.prepend(largeImage);
    }
});
