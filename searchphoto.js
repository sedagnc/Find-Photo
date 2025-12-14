
const form_wrappert = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const search_input = document.querySelector(".search_input")
const button_wrappert = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#cleanButton")
const imageLİstWrappert = document.querySelector(".imagelist-wrapper")

runeventlıstener()

function runeventlıstener() {
    form.addEventListener("submit", search)
    clearButton.addEventListener("click", clear)
}

function clear(e) {
    search_input.value = "";
    Array.from(imageLİstWrappert.children).forEach((resim) => {
        resim.remove();
    })

}

function search(e) {

    imageLİstWrappert.innerHTML=""
    const input = search_input.value.trim()

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}`,
        {
            method: "GET",
            headers: {
                Authorization: "Client-ID 2ZKZ3CuFxJwieKcA2v15qqFk6SKZmdukxGsgkgQXHqg"
            }
        })
        .then((resolt) => resolt.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                addImageToUI(image.urls.small)
            })
        })
        .catch((err) => console.log(err))






    e.preventDefault();
}


function addImageToUI(url) {
    const div = document.createElement("div")
    div.className = "image"

    const img = document.createElement("img")
    img.setAttribute("src", url)
    img.height = "400"
    img.width = "400"

    div.append(img)
    imageLİstWrappert.append(div)
}