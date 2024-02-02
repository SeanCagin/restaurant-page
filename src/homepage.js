
function generatePage() {
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const contentHolder = document.createElement('div');

    title.textContent = 'Welcome to the Casino Restaurant!';
    description.textContent = `We serve various dishes ranging from the lottery to poker. Slot machines are 
                                are commonplace and the smell of weed is a part who we are. Harder drugs are 
                                use-at-your-own-risk, meaning that although we won't go out of our way to catch you,
                                we are still trying to run a legal business here (a boundry which we've already clearly overstepped).`;

    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    
    return contentHolder; 
}

export default generatePage;