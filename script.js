// Handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            showCatHeartAndBellThenText();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'EXCUSE ME ARE JU SURE MUMMA🙄🙄?';
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

// Display initial small cat
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    const cat = new Image();
    cat.src = 'cat.gif.png'; // original cat
    cat.alt = 'Cat';
    cat.id = 'cat-image';
    cat.style.width = '120px';
    cat.style.height = 'auto';

    imageContainer.appendChild(cat);
}

// Show cat-heart + bell, then update text
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
    newContainer.style.marginTop = '40px'; // move images down

    // Cat-heart image
    const catHeart = new Image();
    catHeart.src = 'cat-heart.gif';
    catHeart.alt = 'Cat Heart';
    catHeart.style.width = '30%';  // bigger size ~1/4 page
    catHeart.style.height = 'auto';
    newContainer.appendChild(catHeart);

    // Bell image
    const bell = new Image();
    bell.src = 'bell.png';
    bell.alt = 'Bell';
    bell.style.width = '20%'; // slightly smaller
    bell.style.height = 'auto';
    newContainer.appendChild(bell);

    imageContainer.appendChild(newContainer);

    // After a short delay, update text
    setTimeout(() => {
        question.innerText = 'YAYAYAY BWAHAHHAHA MY GOOD GIRL YOU ARE MY VALENTINE FOREVERR!!';
        question.style.fontSize = '60px';
        question.style.color = '#FF2D95'; // cute pink
        question.style.marginTop = '50px'; // push text below images
    }, 500); // 0.5s delay so images appear first
}

// Initial load
displayCat();
