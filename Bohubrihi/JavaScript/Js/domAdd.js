//ADD, Create
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

olItem.setAttribute('tittle','A new Tittle')

olItem.appendChild(document.createTextNode('JavaScript'))

document.querySelector('ol').appendChild(olItem)

console.log(olItem)



let ulItem = document.createElement('li')

let link = document.createElement('a')
link.setAttribute('href', 'www.linkedIn.com')
link.appendChild(document.createTextNode('LinkedIn'))
ulItem.appendChild(link)

document.querySelector('ul').appendChild(ulItem)

console.log(ulItem)

console.log(link)

let nH = document.createElement('h1')
nH.appendChild(document.createTextNode('Replaced Heading'))

let old = document.querySelector('h3')

old.parentElement.replaceChild(nH,old)



console.log(nH)