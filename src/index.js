import generateHomepage from './homepage.js';
import generateMenupage from './menupage.js';
import generateAboutpage from './aboutpage.js';
import './styles.css';

const contentHolder = document.querySelector('div#content');
const homeButton = document.querySelector('button.load-page#home-page');
const menuButton = document.querySelector('button.load-page#menu-page');
const aboutButton = document.querySelector('button.load-page#about-page');

homeButton.addEventListener('click', (e) => {
    contentHolder.innerHTML = '';
    contentHolder.appendChild(generateHomepage());
});
menuButton.addEventListener('click', (e) => {
    contentHolder.innerHTML = '';
    contentHolder.appendChild(generateMenupage());
});
aboutButton.addEventListener('click', (e) => {
    contentHolder.innerHTML = '';
    contentHolder.appendChild(generateAboutpage());
});

contentHolder.appendChild(generateHomepage());
