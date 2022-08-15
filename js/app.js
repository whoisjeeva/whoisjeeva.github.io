function imgCreate(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

function createCard(data) {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let img = imgCreate(data.image, "App icon", data.title)
    card.appendChild(img)

    let details = document.createElement("div")
    details.classList.add("details")
    card.appendChild(details)

    let title = document.createElement("h2")
    title.classList.add("no-margin")
    title.setAttribute("id", "title")
    title.innerHTML = data.title
    details.appendChild(title)

    let row = document.createElement("div")
    row.classList.add("row")
    details.appendChild(row)

    let price = document.createElement("div")
    price.classList.add("price")
    price.innerHTML = "$" + data.price
    row.appendChild(price)

    let stertch = document.createElement("div")
    stertch.style.flexGrow = "1"
    row.appendChild(stertch)

    let infoBtn = document.createElement("div")
    infoBtn.classList.add("btn")
    infoBtn.innerHTML = "Info"
    row.appendChild(infoBtn)

    let buyBtn = document.createElement("div")
    buyBtn.classList.add("btn")
    buyBtn.innerHTML = "Buy"
    row.appendChild(buyBtn)

    let previewBtn = document.createElement("div")
    previewBtn.classList.add("btn", "primary")
    previewBtn.innerHTML = "Preview"
    row.appendChild(previewBtn)


    previewBtn.addEventListener("click", e => {
        window.open(data.appUrl, '_blank').focus()
    })

    buyBtn.addEventListener("click", e => {
        document.querySelector(".overlay.buy").style.display = "block"
    })

    infoBtn.addEventListener("click", e => {
        document.querySelector(".overlay.info .message").innerHTML = data.info
        document.querySelector(".overlay.info").style.display = "block"
    })


    return card
}



const section = document.querySelector(".section")
for (let d of DATA) {
    let card = createCard(d)
    section.appendChild(card)
}



document.querySelector(".overlay.buy .dialog .ok").addEventListener("click", e => {
    document.querySelector(".overlay.buy").style.display = "none"
})

document.querySelector(".overlay.info .dialog .ok").addEventListener("click", e => {
    document.querySelector(".overlay.info").style.display = "none"
})

