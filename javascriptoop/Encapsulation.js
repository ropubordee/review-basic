class User {
  #name; //public
  #password; //private
  constructor(name, password) {
    this.#name = name;
    this.#password=password
  }
  showDetail() {
    // this.#name='Avatar' //สามารถเปลี่ยนใน Class ได้
    console.log(`ชื่อผู้ใช้ ${this.#name}, รหัสผ่าน ${this.#password}`);
  }
  // setter
  set Name(newName){
    this.#name = newName
  }
  // getter
  get Name(){
    return this.#name
  }
  set Password(newPassword){
    this.#password = newPassword
  }
  get Password(){
    return this.#password
  }
}

const user1 = new User("pubordee", 123);
// user1.setName('lnwDew')
// user1.setPassword('0987')
// console.log(user1.getName());
// console.log(user1.getPassword())  แบบ ปกติ

user1.Name='jojo'  // แบบ Accessors ถ้ามี = จะเป็น set ถ้าเรียกใช้เฉยๆจะเป็น get
console.log(user1.Name);
user1.Password='98765'
console.log(user1.Password);


