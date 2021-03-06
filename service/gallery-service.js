const gKeywords = ['funny', 'women', 'men', 'animals', 'politics']
var gKeywordSearchCountMap = {funny: 8,women: 7, men: 6, animals: 8, politics: 7}

var gImgs
var gFilterBy = ''
_createImgs()



function getImgs() {
    var imgs = []

    if (gKeywords.includes(gFilterBy)) {
        imgs = gImgs.filter((img) => img.keywords.includes(gFilterBy))
        gKeywordSearchCountMap[gFilterBy] += 1
        updateTagsSize()
        return imgs
    }
    else {
        _createImgs()
        return gImgs
    }
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

        imgs[0].keywords = ['politics', 'men']
        imgs[1].keywords = ['animals']
        imgs[2].keywords = ['animals','baby']
        imgs[3].keywords = ['animals']
        imgs[4].keywords = ['baby']
        imgs[5].keywords = ['funny']
        imgs[6].keywords = ['baby', 'funny']
        imgs[7].keywords = ['funny','women']
        imgs[8].keywords = ['baby', 'funny']
        imgs[9].keywords = ['politics','men']
        imgs[0].keywords = ['funny', 'men']
        imgs[10].keywords = ['funny', 'men']
        imgs[11].keywords = ['men', 'funny']
        imgs[12].keywords = ['men', 'funny']
        imgs[13].keywords = ['funny', 'men']
        imgs[14].keywords = ['funny', 'men']
        imgs[15].keywords = ['politics','men']
        imgs[16].keywords = ['funny']
        

        gImgs = imgs
    }

    function setFilter(value) {

        gFilterBy = value.toLowerCase()
        renderImgs()
    }

    gElTags.forEach((tagEl) => {
        tagEl.addEventListener('click', function () {
            let tagVal = tagEl.innerHTML.toLowerCase()
            setFilter(tagVal)
            elSearchInput.value = tagVal
            let keyword = tagVal
            gKeywordSearchCountMap[keyword]++            
            updateTagsSize()
        })
    })

    function updateTagsSize() {
        gElTags.forEach((tagEl) => {
            let tag = tagEl.innerHTML.toLowerCase()
            
                tagEl.style.fontSize = `${gKeywordSearchCountMap[tag] * 4}px`
                
                if (tag === gFilterBy.toLowerCase()) {
                    tagEl.style.color = '#F7DC6F'
                    setTimeout(function () {
                        tagEl.style.color = '#333'
                    },300)
                }
                console.log('hi')

        })
    }