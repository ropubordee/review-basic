class User {
  _name; //protected
  #password; 
  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }
  showDetail() {
    // this.#name='Avatar' //สามารถเปลี่ยนใน Class ได้
    console.log(`ชื่อผู้ใช้ ${this._name}, รหัสผ่าน ${this.#password}`);
  }
  // setter
  set Name(newName) {
    this._name = newName;
  }
  // getter
  get Name() {
    return this._name;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  get Password() {
    return this.#password;
  }
}

class Teacher extends User {
  #course;
  constructor(name, password, course) {
    super(name, password); // constructor แม่
    this.#course = course;
  }
  showDetail() {
    console.log(`ชื่อคุณครู ${this._name} สอนวิชา ${this.#course}`);
  }
}

class Student extends User {
  #score;
  constructor(name, password, score) {
    super(name, password);
    this.#score = score;
  }
  showDetail() {
    console.log(`ชื่อนักเรียน ${this._name} สอบได้ ${this.#score}`);
  }
}

const user1 = new Teacher("teacher1", 123456789, "เขียนโปรแกรม");
user1.showDetail();
const user2 = new Student("jojo", 789, 100);
user2.showDetail();
