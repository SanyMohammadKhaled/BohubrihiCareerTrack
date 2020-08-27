var student = {
    name : 'Sany',
    id : 1711853042,
    address : 'Gazipur'
}

console.log(student.name)

student.village = "Dighirchala" //adding property

delete student.address; // deleting property

console.log(student)

var emptyObject = {} // can declare empty object

var array = [1,2,['a',['Sany','Turza'],'c'],3,4] // access array under array

console.log(array[2][1][0])

var arrObject = [1,2,['a',{Name : 'Sany'},'c'],3,4] // acces object under array

console.log(arrObject[2][1].Name)

