const bcrypt = require('bcryptjs');

const password = 'password123'; // Replace with the password you want to hash

const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
}); 