class CW5 extends Menu {
  constructor() {
    super();
    this.pnt=new Point(5,3);
    this.pnt3d=new Point3D(2,6,7);
    this.std=new Student(123,"tugce",6353, "B114");
    this.crs=new Course("JS","13.00","persembe","B110");
  }

}


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
class Point {
  constructor(x,y) {

    this.x=x;
    this.y=y;
}
toString(){
  return this.x+" "+this.y
}
Pointuzaklikhesapla(x,y){
  return Math.sqrt((x*x)+(y*y))
}
}
class Point3D extends Point{
  constructor(u,v,z) {
    super(u,v);
    this.z=z;
}
toString(){
  return this.x+" "+this.y+" "+this.z
}
}
