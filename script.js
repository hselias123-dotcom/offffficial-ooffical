function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(() => {
            showYayWithCatAndBell();
        });
    } else if (option === 'no') {
        const noButton = document.getElementById('no-button');
        noButton.innerText = 'Ju sure about that MUMMAAA 🙄?';

        const yesButton = document.getElementById('yes-button');
        const currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = parseFloat(currentSize) * 2 + 'px';
    }
}

function flashRainbowColors(callback) {
    const colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        callback();
    }, 2000);
}

// Show initial cat small at top
function displayCat() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';

    const cat = document.createElement('img');
    cat.src = 'cat.gif.png';
    cat.alt = 'Cat';
    cat.id = 'cat-image'; // give it an ID so we can swap it later
    container.appendChild(cat);
}

// YES click → cat + bell remain visible at top
function showYayWithCatAndBell() {
    const container = document.getElementById('image-container');
    const question = document.getElementById('question');
    const options = document.getElementById('options');

    // Hide buttons
    options.style.display = 'none';

    // Update text
    question.innerText = 'BWAHAHA YAYYYYYYYYYY MY GOOD GIRL JU MY VALENTINE FOREVERRR 😆💖';
    question.style.fontSize = '48px';
    question.style.color = 'black';

    // Change existing cat to catheart.gif
    const cat = document.getElementById('cat-image');
    cat.src = 'catheart.gif'; // swap the image

    // Add bell image next to cat (if not already added)
    if (!document.getElementById('bell-image')) {
        const bell = document.createElement('img');
        bell.src = 'bell.png';
        bell.alt = 'Bell';
        bell.id = 'bell-image';
        container.appendChild(bell);
    }
}

// Initial load
displayCat();
