// object literal notation
const userOne = {
  username: 'sujan',
  email: 'sujan@gmaol.com',
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
