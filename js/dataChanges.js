const dataChanges = () => {
    let images = document.querySelectorAll('img')
    if (window.innerWidth <= 1060) {
        images.forEach(image => {
            image.src = image.getAttribute('data-src-160')
        })
        if (window.innerWidth <= 830) {
            images.forEach(image => {
                image.src = image.getAttribute('data-src-120')
            })
            if (window.innerWidth <= 630) {
                images.forEach(image => {
                    image.src = image.getAttribute('data-src-90')
                })
            }
        }
    }
}



dataChanges()
