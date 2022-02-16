'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gElGallery = document.querySelector('.gallery')
var gElCanvas
var gCtx

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [ {
        txt: 'I sometimes eat Falafel', 
        size: 20,
        align: 'left',
        color: 'red',
        strokeColor: 'black',
        yCoord: 50,
        xCoord: 50
    }]
}

function renderMeme(elImg) {
    gElGallery.classList.add('hide')
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);

}