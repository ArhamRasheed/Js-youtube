const clock = document.getElementById('Clock')

setInterval(function (){
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)