
const slides = document.getElementsByClassName('carousel-slide-img')
let index = -1
let timer = undefined

nextSlide()

function nextSlide() {
    clearTimeout(timer)
    nextIndex()
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[index].style.display = 'flex'
    timer = setTimeout(nextSlide, 5000)
}

function previousSlide() {
    previousIndex()
    previousIndex()
    nextSlide()
}

function nextIndex() {
    index++
    if (index >= slides.length) {
        index = 0
    }
}

function previousIndex() {
    index--
    if (index < 0) {
        index = slides.length - 1
    }
}
