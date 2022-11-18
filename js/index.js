import { dates } from "./data.js"

<<<<<<< HEAD
=======
let contain = document.createElement('div')
contain.className = 'container'
let title = document.createElement('h1')
title.className = 'title'
title.innerHTML = 'A History of Baking'
contain.appendChild(title)
document.body.getElementsByClassName('timeline')[0].appendChild(contain)
>>>>>>> 8308409a8cd8972f5a5e0f1e08582811c99a641d

for (let i = 0; i < dates.length; i++) {

    let container = document.createElement('div')
    container.className = 'timeline-item'

    let heading = document.createElement('h2')
    heading.className = 'timeline-item-title'
    heading.innerHTML = dates[i].title
    container.appendChild(heading)

    let span = document.createElement('span')
    span.className = 'timeline-item-date'
    span.innerHTML = dates[i].date
    container.appendChild(span)

    let paragraph = document.createElement('p')
    paragraph.className = 'timeline-item-summary'
    paragraph.innerHTML = dates[i].summary
    container.appendChild(paragraph)

    let events = document.createElement('button')
    events.className = 'timeline-item-more-info'
    events.innerHTML = 'Click for more info'
    container.appendChild(events)
    document.body.getElementsByClassName("timeline")[0].appendChild(container)

    let modal = document.createElement('div')
    modal.setAttribute('id', 'modal')
    modal.className = 'hidden'
    container.appendChild(modal)

    let modalcontainer = document.createElement('div')
    modalcontainer.setAttribute('id', 'modal-container')
    modal.appendChild(modalcontainer)

    let title = document.createElement('h2')
    title.setAttribute('id', 'modal-title')
    title.innerHTML = dates[i].title
    modalcontainer.appendChild(title)

    let date = document.createElement('span')
    date.setAttribute('id', 'modal-date')
    date.innerHTML = dates[i].date
    modalcontainer.appendChild(date)

    let images = document.createElement('img')
    images.setAttribute('id', 'modal-image')
    images.src = dates[i].image
    modalcontainer.appendChild(images)

    let descrip = document.createElement('p')
    descrip.setAttribute('id', 'modal-full-description')
    descrip.innerHTML = dates[i].fullDescription
    modalcontainer.appendChild(descrip)

    let close = document.createElement('span')
    close.setAttribute('id', 'modal-close-button')
    close.className = 'close'
    close.innerHTML = 'close'
    modal.appendChild(close)
    document.body.getElementsByClassName("timeline")[0].appendChild(container)
}


for (let i = 0; i < dates.length; i++) {

    let clickopen = document.getElementsByClassName("hidden")[i];
    
    let btn = document.getElementsByClassName("timeline-item-more-info")[i];
    
    let closebutton = document.getElementsByClassName("close")[i];
    
    btn.addEventListener('click', (i) => {
        clickopen.style.display = 'block';
    })
    
    closebutton.addEventListener('click', (i) => {
        clickopen.style.display = 'none';
    })
    }