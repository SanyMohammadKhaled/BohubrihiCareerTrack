console.log('Connected')

var person = {
    Name : 'Sany',
    lname: 'Khaled',
    Id : 1711853042,
    doB : 1997,
    age : function(){
        return 2020-this.doB;
    }
}

console.log(person.age())