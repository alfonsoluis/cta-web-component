import { baseUrl } from './dataApi.js';

window.addEventListener('load', function() {
  fetchUsers();
});

async function fetchUsers() {
  const res = await fetch(`${baseUrl}/lists/movies/box_office.json`);
  const json = await res.json();

  const mainContainer = document.querySelector('.main-container');

  json.users.forEach(user => {
    const el = document.createElement('user');
    el .user = user;
    mainContainer.appendChild(el);
  });
}