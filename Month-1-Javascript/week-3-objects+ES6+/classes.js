class Student  {



    constructor(id,name, grade, ...courses){
        this.id = id,
        this.name = name,
        this.grade = grade,
        this.courses = courses
    }


    display(){
        console.log(this.id,this.name,this.grade,this.courses)
    }
}

let stu = new Student (101,"jones","A","Ecn","Acct","Geo")

stu.display()

let stu1 =  new Student(102,"james","B","Bus","Mth","Gpy")
stu1.display()

let stu2 = new Student (103,"Doe","B+","csc","llm","psy")
stu2.display()
