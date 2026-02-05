// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            showCatHeartAndBellThenText();
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

// Display initial cat.gif.png
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // clear container

    const cat = new Image();
    cat.src = 'cat.gif.png'; // original cat
    cat.alt = 'Cat';
    cat.id = 'cat-image';
    cat.style.width = '120px';
    cat.style.height = 'auto';

    imageContainer.appendChild(cat);
}

function showCatHeartAndBellThenText() {
    const question = document.getElementById('question');
    const options = document.getElementById('options');
    const imageContainer = document.getElementById('image-container');

    // Hide buttons
    options.style.display = 'none';

    // Clear old cat
    imageContainer.innerHTML = '';

    // Container for cat-heart + bell
    const newContainer = document.createElement('div');
    newContainer.style.display = 'flex';
    newContainer.style.justifyContent = 'center';
    newContainer.style.alignItems = 'center';
    newContainer.style.gap = '20px';
    newContainer.style.marginTop = '40px'; // move images down a bit

    // Cat-heart image
    const catHeart = new Image();
    catHeart.src = 'cat-heart.gif';
    catHeart.alt = 'Cat Heart';
    catHeart.style.width = '25%';  // ~1/4 of page width
    catHeart.style.height = 'auto';
    newContainer.appendChild(catHeart);

    // Bell image
    const bell = new Image();
    bell.src = 'bell.png';
    bell.alt = 'Bell';
    bell.style.width = '15%'; // slightly smaller than cat-heart
    bell.style.height = 'auto';
    newContainer.appendChild(bell);

    imageContainer.appendChild(newContainer);

    // After a short delay, change the question text
    setTimeout(() => {
        question.innerText = 'YAYAYAY BWAHAHHAHA MY GOOD GIRL YOU ARE MY VALENTINE FOREVERR!!';
        question.style.fontSize = '48px';
        question.style.color = 'black';
        question.style.marginTop = '30px'; // push text down a bit
    }, 500); // 0.5s delay so images appear first
}

// Initial load
displayCat();
