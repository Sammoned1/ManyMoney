new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',
    credits: false,
    // dragAndMove: 'fingersonly',
    recordHistory: true,
    onLeave: function(origin, destination, direction, trigger){
        setTimeout(scroll_handler, 100)
        clearTimeout()
    },
    // beforeLeave: function(origin, destination, direction, trigger){
    //     scroll_handler()
    // },
    fitToSection: true,
})


let sections = document.querySelectorAll('.section')
let scroll_items = document.querySelectorAll('li span')
let nav_items = document.querySelectorAll('li')
let page = document.querySelector('#fullPage')
console.log(window.innerHeight)
console.log(page.pageYOffset)

const scroll_handler = () => {
    sections.forEach(section => {
        if (section.classList.contains('active')) {
            if (section.classList.contains('white')) {
                scroll_items.forEach(scroll_item => {
                    if (!scroll_item.classList.contains('white'))
                        scroll_item.classList.add('white')
                })
            } else {
                scroll_items.forEach(scroll_item => {
                    if (scroll_item.classList.contains('white')) {
                        scroll_item.classList.remove('white')
                    }
                })
            }
        }
    })
}

// window.addEventListener('wheel', () => {
//     scroll_handler()
//     console.log(document.body.offsetTop)
// })
//
// window.addEventListener('keyup', e => {
//     if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//         scroll_handler()
//     }
// })
//
// window.addEventListener('keydown', e => {
//     if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//         scroll_handler()
//     }
// })
//
// window.addEventListener('drag', () => {
//     console.log('drag!')
// })
//
// nav_items.forEach(nav_item => {
//     nav_item.addEventListener('click', () => {
//         setTimeout(scroll_handler, 100)
//         clearTimeout()
//     })
// })

