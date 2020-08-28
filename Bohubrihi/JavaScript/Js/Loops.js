/*While Loop

var i = 1;

while(i <= 5){
    console.log('Practising loops')
    i++;
} */

/* var i = 1;
var sum = 0;
while (i <= 10){
    sum=sum+i;
    i++;   
}

console.log(sum) 

/*
var str = "Bohubrihi"

for(var i = 0 ; i<str.length ; i++){
    console.log(str[i])
}*/

/*var arr = [1,3,5,7,9,2,4,6,8]

for (var j = 0 ; j < arr.length ; j++){
    console.log(arr[j])
} */

/*var person = {
    name : 'Sany',
    id : 1711853042,
    profession : 'Student'
}
var str  = "I love Javascript"

for(var x in str){ //To get Serial Number, Strings/Array/Object
    console.log(`Item${x} : ${str[x]}`)
}

for (var y of str){ //to get items, Strings/Array
    console.log(y)
}

for(var j in person){
    console.log(`Property - ${j} : ${person[j]}`)
}*/

var x = prompt('How Many Square Number ? : ')

x = parseInt(x)
var sum = 0;
var series = "";

for (i = 1 ; i <= x ; i++){
    sum = sum + i**2
    series+= i**2
    if(i == x){
        continue
    } 
    series+=" + "
}

console.log(`${series} = ${sum}`)
