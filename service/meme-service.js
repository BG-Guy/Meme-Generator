'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
var gLineIdx = 0
var gCurrImgEl

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel', 
        size: 30,
        align: 'left',
        color: 'red',
        strokeColor: 'black',
        font: 'Arial',
        yCoord: 50,
        xCoord: 50
    },
    {
        txt: 'Going for a trip',
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'black',
        font: 'Arial',
        yCoord: 200,
        xCoord: 200,
    }]
}



function getMeme() {
    var lines = gMeme.lines
    gCtx.drawImage(gCurrImgEl, 0, 0, gElCanvas.width, gElCanvas.height);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = lines[0].strokeColor;
    gCtx.fillStyle = lines[0].color;
    gCtx.font = `${lines[0].size}px ${lines[0].font}`;
    gCtx.fillText(lines[0].txt, lines[0].xCoord, lines[0].yCoord);
    gCtx.strokeText(lines[0].txt, lines[0].xCoord, lines[0].yCoord);
}

function setLineTxt(txt) {
    
    if (!txt.trim()) return
    gMeme.lines[0].txt = txt
    renderMeme()

}



