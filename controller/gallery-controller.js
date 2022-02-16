'use strict'

function init() {
    renderImgs()
}

function renderImgs() {
    var imgs = getImgs()
    var strHtmls = imgs.map((img) => {
        return `
        <div onclick="select-img" class="img-preview">
            <img height = "200" width = "200" src="${img.url}" alt="img ${img.id}">
        </div>
        `
    })
    document.querySelector('.img-gallery').innerHTML = strHtmls.join('')
}

