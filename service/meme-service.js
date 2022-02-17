'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel', 
        size: 30,
        align: 'left',
        color: 'red',
        strokeColor: 'black',
        font: 'Impact',
        yCoord: 50,
        xCoord: 50,
        isFocus: true
    }]
}



function getMeme() {
    gMeme.lines.forEach((line) => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillText(line.txt, line.xCoord, line.yCoord);
        gCtx.strokeText(line.txt, line.xCoord, line.yCoord);

    })
}

function setLineTxt(txt) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    if (!txt.trim()) return
    line.txt = txt
    renderMeme()
    

}

function setColor(color) {
    var line = gMeme.lines[gMeme.selectedLineIdx]

    line.color = color
    renderMeme()

    
}

function setFont(fontOrStep) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    if (isNaN(fontOrStep)) line.font = fontOrStep
    else line.size += fontOrStep
    renderMeme()

    
}
 
function switchLines() {
    
    
}

function setAlignText(position) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    line.align = position
    renderMeme()
}

function createLine(txt) {
    if (!txt.trim()) return
    return {
        txt: txt,
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'black',
        font: 'Impact',
        yCoord: 200,
        xCoord: 200,
        isFocus: false
    }
}
