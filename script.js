// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            swapCatAndAddBell();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = parseFloat(currentFontSize) * 2 + 'px';
    }
}

// Rainbow flash effect
function flashRainbowColors(callback) {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        if (callback) callback();
    }, 2000);
}

// Display the initial cat.gif.png
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // clear container

    const cat = new Image();
    cat.src = 'cat.gif.png'; // correct filename
    cat.alt = 'Cat';
    cat.id = 'cat-image';
    cat.style.width = '120px';
    cat.style.height = 'auto';

    imageContainer.appendChild(cat);
}

// Swap cat.gif.png to cat-heart.gif and add bell.png
function swapCatAndAddBell() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // remove old cat

    // Container for cat-heart + bell
    const newContainer = document.createElement('div');
    newContainer.style.display = 'flex';
    newContainer.style.justifyContent = 'center';
    newContainer.style.alignItems = 'center';
    newContainer.style.gap = '15px';

    // Cat-heart image
    const catHeart = new Image();
    catHeart.src = 'cat-heart.gif'; // correct filename
    catHeart.alt = 'Cat Heart';
    catHeart.style.width = '120px';
    catHeart.style.height = 'auto';
    newContainer.appendChild(catHeart);

    // Bell image
    const bell = new Image();
    bell.src = 'bell.png'; // make sure bell.png is in same folder
    bell.alt = 'Bell';
    bell.style.width = '80px';
    bell.style.height = 'auto';
    newContainer.appendChild(bell);

    imageContainer.appendChild(newContainer);
}

// Initial load
displayCat();
