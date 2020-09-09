//Class name is a template for creating object

class Person{
    constructor(fname,lname,dob){
        this.Fname = fname,
        this.Lname = lname,
        this.dob  = dob
    }
    calcAge (){
    var bYear = new Date(this.dob)
    var diff = Date.now()-bYear
    var ageD = new Date(diff)
    return Math.abs(ageD.getUTCFullYear()-1970)

    }
}

person1 = new Person('Sany','Khaled','01-11-1997')
console.log(person1)
console.log(person1.calcAge()) 

//subclass,Inheritence

class teacher extends Person{
    
    constructor(Fname,Lname,id,add){
        super(Fname,Lname)    
        this.id = id,
        this.add = add  
  }
}

teacher1 = new teacher('Simanta','Paul',1711853,'Dhaka')
console.log(teacher1)