// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            showValentineMessage();
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
    cat.src = 'cat.gif.png'; // your original cat
    cat.alt = 'Cat';
    cat.id = 'cat-image';
    cat.style.width = '120px';
    cat.style.height = 'auto';

    imageContainer.appendChild(cat);
}

// Show Valentine message + cat-heart + bell
function showValentineMessage() {
    const question = document.getElementById('question');
    const options = document.getElementById('options');
    const imageContainer = document.getElementById('image-container');

    // Update text
    question.innerText = 'YAYAYAY BWAHAHHAHA MY GOOD GIRL YOU ARE MY VALENTINE FOREVERR!!';
    question.style.fontSize = '48px';
    question.style.color = 'black';

    // Hide buttons
    options.style.display = 'none';

    // Clear old cat
    imageContainer.innerHTML = '';

    // Container for cat-heart + bell
    const newContainer = document.createElement('div');
    newContainer.style.display = 'flex';
    newContainer.style.justifyContent = 'center';
    newContainer.style.alignItems = 'center';
    newContainer.style.gap = '15px';
    newContainer.style.marginTop = '20px'; // space below text

    // Cat-heart image
    const catHeart = new Image();
    catHeart.src = 'cat-heart.gif'; // your heart cat
    catHeart.alt = 'Cat Heart';
    catHeart.style.width = '120px';
    catHeart.style.height = 'auto';
    newContainer.appendChild(catHeart);

    // Bell image
    const bell = new Image();
    bell.src = 'bell.png';
    bell.alt = 'Bell';
    bell.style.width = '80px';
    bell.style.height = 'auto';
    newContainer.appendChild(bell);

    imageContainer.appendChild(newContainer);
}

// Initial load
displayCat();
