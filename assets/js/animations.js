//apparition fade-in au scroll

const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
}))


// détection par position de la souris