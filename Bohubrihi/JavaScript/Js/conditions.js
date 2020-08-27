/* var age = prompt('Your Age ?  :')

if (age > 30 && age < 40){
    console.log(`You are a middle age person aged ${age} now`)
} 
else if (age > 40 && age < 50){
    console.log(`You are getting older aged ${age} now`)
} 

//Find Largest Number

var n1 = prompt('First Num');
var n2 = prompt('Second Num');
var n3 = prompt('Third Num');

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1>n2){
    if (n1>n3){
        console.log(`${n1} is the largest number!`)
    }
    else{
        console.log(`${n3} is the largest number!`)
    }
        
}
else {
    if(n2>n3){
        console.log(`${n2} is the largest number!`)
    }
}
var input = prompt('Choose MonthNumber : ')

switch(input){
    case '1' : console.log('January') 
    break;
    case '2' : console.log('February') 
    break;
    case '3' : console.log('March') 
    break;
    case '4' : console.log('April') 
    break;
    case '5' : console.log('May') 
    break;
    case '6' : console.log('June') 
    break;
    case '7' : console.log('July') 
    break;
    case '8' : console.log('August') 
    break;
    case '9' : console.log('September') 
    break;
    case '10' : console.log('October') 
    break;
    case '11' : console.log('November') 
    break;
    case '12' : console.log('December') 
    break;
    default : console.log('There are only 12 Months in a yeah! Idiot')  
}
    

var inp = prompt('What is your number?')  

inp = parseInt(inp)

var grade;
if (inp < 0 || inp > 100){
    console.log("Invalid Input! Enter a Number between 0-100 to get your grade");
}
else if(inp > 80){
    grade = 'A';
}else if(inp > 70){
    grade = 'A-';   
} else if (inp > 60){
    grade = 'B';   
}else if (inp >  50){
    grade = 'B-';
} else if(inp>40){
   grade = 'C';
}else{
    console.log("You've failed!!")
}

console.log(`Your Grade is ${grade}`) */
console.log('Enter Your Choice')
console.log(`1.Add
2.Substract
3.Multiply
4.Division`)

var n1 = prompt('Num1')
var n2 = prompt('Num2')
var com = prompt('Enter command')

n1 = parseInt(n1)
n2 = parseInt(n2)
com = parseInt(com)

var num1 = isNaN(n1)
var num2 = isNaN(n2)
var comm = isNaN(com)

var result;

if( num1 || num2 || comm){
    console.log('invalid input/Inputs')
}else{
switch(com){
    case 1 :
        result = n1 + n2
        break;
    case 2:
        result = n1 - n2
        break;
    case 3:
        result  = n1 * n2
        break;
    case 4:
        result = n1 / n2   
        break;
    default:
        result = 'Invalid Maths'             
}

console.log(`num1 = ${n1},
num2 = ${n2},
command = ${com}
${result}
`)
}
