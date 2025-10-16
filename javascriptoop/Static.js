class User {
  #name; //public
  #password; //private
  static database =[];
  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }
  showDetail() {
    // this.#name='Avatar' //สามารถเปลี่ยนใน Class ได้
    console.log(`ชื่อผู้ใช้ ${this.#name}, รหัสผ่าน ${this.#password}`);
  }
  // setter
  set Name(newName) {
    this.#name = newName;
  }
  // getter
  get Name() {
    return this.#name;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  get Password() {
    return this.#password;
  }
  static addUser(newUser){
    this.database.push(newUser)
  }

}

const user1 = new User("pubordee", 123);
const user2 = new User("jojo", 456);
const user3 = new User("nam", 789);

User.addUser(user1)
User.addUser(user2)
User.addUser(user3)

User.database.forEach((user)=>{
    user.showDetail()
    // console.log(user);
    
})