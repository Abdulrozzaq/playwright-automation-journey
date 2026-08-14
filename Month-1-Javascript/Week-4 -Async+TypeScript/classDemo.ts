class Student{
ename: string;
eid: number;
edept: number;


constructor(name:string, id: number, dept:number){
    this.ename=name;
    this.eid=id;
    this.edept=dept;
}

display():void{
    console.log(this.edept)
    console.log(this.eid)
    console.log(this.ename)
}


}

var emp = new Student("mon",10,90)

emp.display();

