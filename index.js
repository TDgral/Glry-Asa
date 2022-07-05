const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-low')) {
        body.style.background = '#f8f6f6'
        body.style.color = '#212121'
        body.style.transition = '1s'
    } else {
        body.style.background = '#080210'
        body.style.color = '#f8f6f6'
        body.style.transition = '1s'
    }
})