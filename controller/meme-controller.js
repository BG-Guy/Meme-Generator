'use strict'

var gCurrImgEl
var gElCanvas
var gElCanvasWidth
var gElCanvasHeight
var gCtx


function renderMeme() {
    
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    gCtx.drawImage(gCurrImgEl, 0, 0, gElCanvasWidth, gElCanvasHeight);

    getMeme()
}


function resizeCanvas() {
    var elCanvasContainer = document.querySelector('#meme-canvas')
    gElCanvasWidth = elCanvasContainer.offsetWidth
    gElCanvasHeight = elCanvasContainer.offsetHeight
    console.log(gElCanvasHeight);
    console.log(gElCanvasWidth);

}

function onEditLine(txt) {
    setLineTxt(txt)
    gElLineInput.value = ''

}

function onAddLine() {
    if (!gElLineInput.value.trim()) return
    var line = createLine(gElLineInput.value)
    gMeme.lines.push(line)
    renderMeme()
    gElLineInput.value = ''
    console.log(line);
}

function onSetFont(font) {
    setFont(font)
    
}

function onSwitchLines() {
    switchLines()
    
    
}

function onSetColor(color) {    
    setColor(color)
}

function onIncFont() {
    var inc = 1.125
    setFont(inc)

}

function onDecFont() {
    var dec = -1.125
    setFont(dec)
}

function onAlignText(position) {
    setAlignText(position)
}

function onShare() {

}