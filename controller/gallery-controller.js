'use strict'

function init() {
    renderImgs()
}

function renderImgs() {
    var imgs = getImgs()
    console.log(imgs);
    var strHtmls = imgs.map((img) => {
        return `
        
            <img onclick="renderMeme(this)" class="img-preview" 
            height = "200" width = "200" id="img-${img.id}" src="${img.url}" alt="img ${img.id}">
        
        `
    })
    document.querySelector('.img-gallery').innerHTML = strHtmls.join('')
}

