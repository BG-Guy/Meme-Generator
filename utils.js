var input = document.querySelector('#add-line')
input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault()
            document.querySelector('.addBtn').click()
        }
    })
