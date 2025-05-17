var wrapper = document.querySelector('.wrapper')
var imageGallery = document.querySelector('.carousel')
var isDragging = false, startX, startScrollLeft, timeoutId
var arrowBtns = document.querySelectorAll('.wrapper i')
var imageGalleryImages = [
    '/images/DoubleRoomCoverImage.jpg',
    '/images/DoubleRoomWithMountainViewCoverImage.jpg',
    '/images/DoubleRoomCoverImage.jpg',
    '/images/DoubleRoomWithMountainViewCoverImage.jpg',
    '/images/DoubleRoomCoverImage.jpg',
    '/images/DoubleRoomWithMountainViewCoverImage.jpg',
    '/images/DoubleRoomCoverImage.jpg',
    '/images/DoubleRoomWithMountainViewCoverImage.jpg',
]

for (var i of imageGalleryImages) {
    imageGallery.innerHTML += `<li class="card"><img draggable="false" src='${i}'></li>`
}

var firstCardWidth = imageGallery.querySelector(".card").offsetWidth
var imageGalleryChildren = [...imageGallery.children]
var cardsPerView = Math.round(imageGallery.offsetWidth / firstCardWidth)
imageGalleryChildren.slice(-cardsPerView).reverse().forEach(card => {
    imageGallery.insertAdjacentHTML("afterbegin", card.outerHTML)
})

imageGalleryChildren.slice(0, cardsPerView).forEach(card => {
    imageGallery.insertAdjacentHTML("beforeend", card.outerHTML)
})


arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        imageGallery.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
})

imageGallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    imageGallery.scrollLeft = startScrollLeft - (e.pageX - startX)
})

imageGallery.addEventListener('mousedown', (e) => {
    isDragging = true
    imageGallery.classList.add('is-dragging')
    startX = e.pageX
    startScrollLeft = imageGallery.scrollLeft
})

document.addEventListener('mouseup', () => {
    isDragging = false
    imageGallery.classList.remove('is-dragging')
})

imageGallery.addEventListener('scroll', ()  => {
    if(imageGallery.scrollLeft === 0) {
        imageGallery.classList.add('no-transition')
        imageGallery.scrollLeft = imageGallery.scrollWidth - ( 2 * imageGallery.offsetWidth)
        imageGallery.classList.remove('no-transition')
    }
    else if(Math.ceil(imageGallery.scrollLeft) === imageGallery.scrollWidth - imageGallery.offsetWidth) {
        imageGallery.classList.add('no-transition')
        imageGallery.scrollLeft = imageGallery.offsetWidth
        imageGallery.classList.remove('no-transition')
    }

    clearTimeout(timeoutId)
    if(!wrapper.matches(':hover')) autoPlay()
})

function autoPlay() {
    if(window.innerWidth < 800) return
    timeoutId = setTimeout(() => imageGallery.scrollLeft += firstCardWidth, 2500)
}

autoPlay()

wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
wrapper.addEventListener('mouseenter', autoPlay)