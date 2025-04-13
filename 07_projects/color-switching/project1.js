const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
    //     if (event.target.id == 'orange') {
    //         body.style.backgroundColor = event.target.id;
    //     }
    //     if (event.target.id == 'purple') {
    //         body.style.backgroundColor = event.target.id;
    //     }
    //     if (event.target.id == 'black') {
    //         body.style.backgroundColor = event.target.id;
    //     }
    //     if (event.target.id == 'green') {
    //         body.style.backgroundColor = event.target.id;
    //     }
    //     if (event.target.id == 'orange') {
    //         body.style.backgroundColor = event.target.id;
    //     }
        body.style.backgroundColor = event.target.id
    })
})