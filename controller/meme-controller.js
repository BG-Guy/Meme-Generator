'use strict'

const gElLineInput = document.querySelector('#text-line')
const gElSelectFontInput = document.querySelector('#set-font')

var gCurrImgEl
var gElGallery = document.querySelector('.gallery')
var gElCanvas
var gCtx


function renderMeme() {
    
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    gCtx.drawImage(gCurrImgEl, 0, 0, gElCanvas.width, gElCanvas.height);

    getMeme()
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
}

function onSetFont(font) {
    setFont(font)
    gElSelectFontInput.value = ''
}

function onSwitchLines() {
    gMeme.selectedLineIdx
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = -1
    gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx)
    
}

function onSetColor(color) {    
    setColor(color)
}

function onIncFont() {
    var inc = 0.6125
    setFont(inc)

}

function onDecFont() {
    var dec = -0.6125
    setFont(dec)
}

function onAlignText(position) {
    setAlignText(position)
}

function onShare() {

}