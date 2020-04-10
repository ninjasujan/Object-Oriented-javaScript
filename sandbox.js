// object literal notation - baisc
/*
const userOne = {
  username: 'sujan',
  email: 'sujan@gmail.com',
  login() {
    console.log('user loggedin');
  },
  logout() {
    console.log('the user logged out');
  },
};

console.log(userOne.email);

userOne.login();
userOne.logout();
*/

/* Classes and object */

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} is just loggedin`);
    return this;
  }
  logout() {
    console.log(`${this.username} is just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score ${this.score}`);
  }
}

class Admin extends User {
  deleteUser(userOne) {
    users = users.filter((user) => {
      return user.username !== userOne.username;
    });
  }
}
// craete new user and method chaining
const userOne = new User('max', 'max@gmail.com');
const userTwo = new User('shaun', 'shaun@gmail.com');
const userThree = new User('mario', 'mario@gmail.com');
const adminOne = new Admin();

let users = [userOne, userTwo, userThree];
adminOne.deleteUser(userOne);
console.log(users);
// new keyword
// 1 - it cretaes a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor fucntion to build a new object
