// constructor under the hood - constructor function
function User(username, email) {
  this.username = username;
  this.email = email;
  this.login = function () {
    console.log(this.username + ' loggedIn');
  };
}

const userOne = new User('mario', 'mario@gmail.com');

console.log(userOne);
userOne.login();
