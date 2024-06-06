// frontend/script.js

const getUsers = async () => {
    try {
      const response = await fetch('/users');
      const users = await response.json();
      console.log(users);
    } catch (err) {
      console.error(err);
    }
  };
  
  getUsers();
  
