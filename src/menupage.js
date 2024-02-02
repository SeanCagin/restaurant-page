
function generatePage() {
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const contentHolder = document.createElement('div');

    title.textContent = 'Welcome to the Casino Restaurant Menu!';
    description.textContent = `Here you can choose various options like blackjack, poker, 
                                and oh wait... nvm (just know it exists).`;

    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    
    return contentHolder; 
}

export default generatePage;