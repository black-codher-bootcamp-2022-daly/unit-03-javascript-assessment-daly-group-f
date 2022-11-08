import { dates } from "./data.js"



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
let modal = document.createElement('div')
modal.setAttribute('id', 'modal-container')
container.appendChild(modal)
let modalcontainer = document.createElement('div')
modalcontainer.setAttribute('id', 'second-modal')
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
descrip.innerHTML = dates[0].fullDescription
modalcontainer.appendChild(descrip)
let close = document.createElement('span')
close.setAttribute('id', 'modal-close-button')
close.innerHTML = '&times;'
modal.appendChild(close)
document.body.getElementsByClassName("timeline")[0].appendChild(container)
}



for (let i = 0; i < dates.length; i++) {

var clickopen = document.getElementById("modal-container");
var btn = document.getElementsByClassName("timeline-item-more-info")[i];
var closebutton = document.getElementById("modal-close-button");


btn.addEventListener('click', openModal);

function openModal(){
    clickopen.style.display = 'block';
    
    
}

closebutton.addEventListener('click', closeModal);

function closeModal(){
    clickopen.style.display = 'none';
}

} 

