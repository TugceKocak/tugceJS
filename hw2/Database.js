
class Course {
  constructor(name,saat,gun,list){
      this.name=name;
      this.saat=saat;
      this.gun=gun;
      this.list=list;

  }
  toString(){
    return this.name+" "+this.saat+" "+this.gun+" "+this.list
  }
}
class Student{
  constructor(id,name,gpa,courses){
    this.name=name;
    this.id=id;
    this.gpa=gpa;
    this.courses=courses;
  }
  toString(){
    return this.id+" "+this.name+" "+this.gpa+" "+this.courses
  }
}
class Database {

}
