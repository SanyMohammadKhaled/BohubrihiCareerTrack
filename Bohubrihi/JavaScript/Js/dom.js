/*var val;

val=this;
val = window.document;
val = document.all;
val = document.all[7];
val = document.all.length;
val = document.head;
val = document.body;
val = document.URL;
val = document.cookie;

val = document.forms;
val = document.forms[0];

val = document.links;
val = document.links[0].className
val = document.links[0].classList

val = document.images
val = document.scripts
val = document.scripts[0].getAttribute("src")
console.log(val)

links = document.links;

let lArr = Array.from(links)

lArr.forEach(function(item){
    console.log(item)

})*/

//selector

/*let val;

val = document.getElementById("doc-tittle")


val = document.getElementById("doc-tittle").style.color = 'red'

val = document.getElementById("doc-tittle").textContent = "Modified By JS"


val = document.getElementById("doc-tittle").innerHTML = 'Again Modified By JS'

let tittle = document.getElementById("doc-tittle")

tittle.style.color = 'Green'

val  = document.querySelector('ul li:nth-child(even)').style.background = "Lime" */


//classname 

/*let list = document.getElementsByClassName('sample-class')
list[2].style.background = 'blue'

list = document.getElementsByTagName('li')



console.log(list) */

let val;
let list = document.querySelector('ul')
let listItem = document.querySelector('ul li')

val = list
val = listItem

// accessChild
val = list;
val = list.childNodes;
console.log(val)