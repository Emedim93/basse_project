// frontend/script.js

const getUsers = async () => {
    try {
      const response = await fetch('/users');
      const users = await response.json();
      const dataDiv = document.getElementById("data");
      dataDiv.innerHTML = `<pre>${JSON.stringify(users, null, 2)}</pre>`;
      console.log(users);
    } catch (err) {
      console.error(err);
    }
  };
  
  getUsers();
  
