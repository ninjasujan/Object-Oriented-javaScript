// constructor under the hood - constructor function
// prototype
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} is loggedin`);
};

User.prototype.logout = function () {
  console.log(`${this.username} is logged out`);
};

const userOne = new User('mario', 'mario@gmail.com');
console.log(userOne);

userOne.login();
userOne.logout();
