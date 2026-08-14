"use strict";
class Student {
    ename;
    eid;
    edept;
    constructor(name, id, dept) {
        this.ename = name;
        this.eid = id;
        this.edept = dept;
    }
    display() {
        console.log(this.edept);
        console.log(this.eid);
        console.log(this.ename);
    }
}
var emp = new Student("mon", 10, 90);
emp.display();
