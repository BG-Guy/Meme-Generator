//EVENT LISTENERS

var input = document.querySelector('#text-line')
input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            console.log(event.keyCode);
            input.click()
        }
    })


// ELEMENTS
const gElLineInput = document.querySelector('#text-line')
const gElSelectFontInput = document.querySelector('#set-font')
const gElMemeGenerator = document.querySelector('.meme-generator')
const gElGallery = document.querySelector('.gallery')


// ANIMATIONS

function expandSearchBar() {

    var elSearchBarInput = document.querySelector('.search-bar-input')
    if (elSearchBarInput.classList.contains('expand')) {
        elSearchBarInput.classList.remove('expand')
    }
    else elSearchBarInput.classList.add('expand')
    
}