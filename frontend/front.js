// frontend/script.js

import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

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
  
