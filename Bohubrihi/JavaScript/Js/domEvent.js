// On Click

let ev = document.getElementById('sample-btn').addEventListener('click',message)

function message(e){
    var val = e;
    val = e.target
    val = e.target.id;
    val = e.timeStamp;
    console.log(val)
}

//document.querySelector('#sample-input').addEventListener('mouseover',bgStyle)

/*function bgStyle(){
    this.style.background = "pink"
} */

document.querySelector('#sample-input').addEventListener('keyup',test)


function test(){
    document.getElementById('demo').innerText = this.value

}





