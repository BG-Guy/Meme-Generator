'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel', 
        size: 30,
        align: 'center',
        color: 'red',
        strokeColor: 'black',
        font: 'Impact',
        yCoord: 50,
        xCoord: 222,
        isFocus: true,
    }]
}



function getMeme() {

    gMeme.lines.forEach((line) => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.xCoord, line.yCoord);
        gCtx.strokeText(line.txt, line.xCoord, line.yCoord);

    })
}

function getTextCoordX(txt) {
    var textLength = gCtx.measureText(txt) 
    var center = gElCanvasWidth / 2
    var textPosX = center
    console.log(` TEXT WIDTH ${textLength.width}`)
    console.log(`CENTER COORD ${center}`);
    console.log(textPosX);
    return textPosX

}

function setLineTxt(txt) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    if (!txt.trim()) return
    line.xCoord = getTextCoordX(txt)
    line.txt = txt
    console.log(line);
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
    
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = -1
    gMeme.selectedLineIdx++
    var line = gMeme.lines[gMeme.selectedLineIdx]
    console.log(gMeme.selectedLineIdx)
    gElLineInput.value = line.txt
    gElSelectFontInput.value = line.font
    console.log(gElLineInput.value)
    console.log(gElSelectFontInput.value)
    console.log(line.font)
    console.log(line.txt)
    
}

function setAlignText(position) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    console.log(position)
    line.align = position
    if (position === 'right') line.xCoord = gElCanvasWidth - 10
    if (position === 'left') line.xCoord = 10
    if (position === 'center') line.xCoord = gElCanvasWidth / 2

    
    renderMeme()
}

function createLine(txt) {
    if (!txt.trim()) return
    if (gMeme.lines.length === 3) return
    return {
        txt: txt,
        size: 30,
        align: 'center',
        color: 'black',
        strokeColor: 'black',
        font: 'Impact',
        yCoord: gMeme.lines.length === 2 ? gElCanvasHeight - 50 : gElCanvasHeight / 2,
        xCoord: gElCanvasWidth/2,
        isFocus: false,
    }
}
