const ul = document.getElementById('nav');
const main = document.querySelector('main');

const home = `
  <div>
    <h1>Home</h1>
  </div>
`;

const about = `
  <div>
    <h1>About</h1>
  </div>
`;

ul.addEventListener('click', (event) => {
  const page = event.target.textContent;
  if (page === 'Home') {
    main.innerHTML = home;
  } else if (page === 'About') {
    main.innerHTML = about;
  }
});