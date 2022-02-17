'use strict'

function init() {
    renderImgs()
}

function renderImgs() {
    var imgs = getImgs()
    var strHtmls = imgs.map((img) => {
        return `
        
            <img onclick="getImg(this)" class="img-preview" 
            height = "300" width = "300" id="img-${img.id}" src="${img.url}" alt="img ${img.id}">
        
        `
    })
    document.querySelector('.img-gallery').innerHTML = strHtmls.join('')
}

function getImg(el) {
    gCurrImgEl = el
    gElGallery.classList.add('hide')
    gElMemeGenerator.classList.remove('hide')

    renderMeme()
}

function showGallery() {
    gElMemeGenerator.classList.add('hide')
    gElGallery.classList.remove('hide')
}