class User {
  name = "Avatar";
  password = 1234;
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.showDetail()// ใน Class
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this.name}, รหัสผ่าน ${this.password}`);
  }
}

const user1 = new User("pubordee", 123);
// user1.showDetail()
const user2 = new User("jojo", 456);
// user2.showDetail()
const user3 = new User("nut", 789);
// user3.showDetail()