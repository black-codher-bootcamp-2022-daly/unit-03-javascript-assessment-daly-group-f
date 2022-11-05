import { dates } from "./data.js"



for (let i = 0; i < dates.length; i++) {
let container = document.createElement('div')
container.className = 'timeline-item'
let heading = document.createElement('h2')
heading.className = 'timeline-item title'
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
document.body.appendChild(container)
}
