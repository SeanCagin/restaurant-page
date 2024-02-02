
function generatePage() {
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const contentHolder = document.createElement('div');

    title.textContent = 'This is the Casino Restaurant Menu!';
    description.textContent = `Gambling addicts from all around the world have gathered
                                to create this casino website (jk don't sue me). For security purposes
                                we do not include the contact information here. Try to see if you can figure
                                out the puzzle and reach the next step (or maybe there is no puzzle...)`;

    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    
    return contentHolder; 
}

export default generatePage;