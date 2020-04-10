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

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

const userOne = new User('mario', 'mario@gmail.com');
const superUser = new Admin('shaun', 'shaun@gmail.com', 'ninaj-black-belt');
console.log(userOne, superUser);

userOne.login();
userOne.logout();
