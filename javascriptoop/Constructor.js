class User {
  name = "Avatar";
  password = 1234;
  constructor(name, password) {
    this.name=name
    this.password=password

  }
}

const user1 = new User("pubordee", 123);
console.log(user1.name)
console.log(user1.password)
const user2 = new User("jojo", 456);
console.log(user2.name);
console.log(user2.password);

const user3 = new User("nut", 789);
console.log(user3.name);
console.log(user3.password );

