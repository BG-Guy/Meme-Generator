'use strict'

const gElAddInputLine = document.querySelector('#add-line')
const gElSelectFontInput = document.querySelector('#set-font')

var gElGallery = document.querySelector('.gallery')
var gElCanvas
var gCtx


function renderMeme(gCurrImgEl) {
    gElGallery.classList.add('hide')
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    getMeme(gCurrImgEl)
}



function onAddLine(elTxt) {
    console.log(elTxt);
    setLineTxt(elTxt.value)
    elTxt.value = ''
}

function onSetFont(font) {
    console.log(font);
}

function onSwitchLines() {

}

function onSetColor(color) {
    var fontColor = color
    return fontColor
}

function onIncFont() {
    var inc = 0.3125
    return inc

}

function onDecFont() {
    var dec = 0.3125
    return dec
}

function onAlignTextLeft() {

}

function onAlignTextToRight() {

}

function onAlignTextToCenter() {

}

function onShare() {

}