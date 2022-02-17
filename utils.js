var input = document.querySelector('#text-line')
input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            console.log(event.keyCode);
            input.click()
        }
    })
