let val;

let list = document.querySelector('ul')
let listItem = document.querySelector('ul li:first-child')

val = list;
val = listItem;

//childNode

val = list
val = list.childNodes;
val = list.childNodes[3]
val = list.nodeName
val = list.nodeType
val = list.children
val = list.children[0].textContent = 'Telegram'
val = list.children[1].children
val = list.children[1].children[0].href
val = list.childElementCount

val = listItem.parentElement
val = listItem.parentElement.parentElement
val = listItem.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

console.log(val)