function saySomething(){
    console.log("I am learning Javascript")
}

saySomething();

function para(a = 0 , b = 0){
    var sum = a+b;
    console.log(sum)
}

para(4,6);

var ex = function(n){
    console.log(`Hello, ${n}`)
}

ex('Sany');

var eex = () =>{
    console.log('This is an Arrow Function,Important ES6')
}
eex();

var eexx = name3 =>{
    console.log(`Hello, ${name3}`)
}

eexx('ES6')

var farr = ['Real Madrid', 'Ac Milan' ,'Bayern Munich','Liverpool','Barcelona']

var arrayIterationFunction = (clubs,index,wholeArr) => {
    console.log(`${index} : ${clubs}`)  
    console.log(`All clubs : ${wholeArr}`)  
}

farr.forEach(arrayIterationFunction)

var numb = [1,4,9,16,25,36,49,64,81,100]

var sqr_root = numb.map(squareRoot => {
    return squareRoot**(1/2)
});

console.log(sqr_root)

