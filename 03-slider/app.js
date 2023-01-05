const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let actuveSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        actuveSlideIndex++
        if (actuveSlideIndex === slidesCount) {
            actuveSlideIndex = 0
        }
    }
    else if (direction === 'down') {
        actuveSlideIndex--
        if (actuveSlideIndex < 0) {
            actuveSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${actuveSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${actuveSlideIndex * height}px)`
}
