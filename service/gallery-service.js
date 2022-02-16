const STORAGE_KEY = 'imgDB'
const gKeywords = ['funny', 'women', 'men', 'animal', 'politics']
var gImgs
var gFilterBy = ''
_createImgs()

function getImgs() {
    if (gFilterBy === '') {
        return gImgs
    }
    var imgs = gImgs.filter((img) => img.keywords.includes(gFilterBy))
    return imgs
}

function _createImg(id) {
    return {
        id,
        url: `meme-imgs/${id}.jpg`,
        keywords: [],
    }
}


function _createImgs() {
        var imgs = []

        for (let i = 1; i < 19; i++) {
            imgs.push(_createImg(i)) 
        }
        gImgs = imgs
    }


