let bgHex = document.getElementById('bgHex');
let bgColor = document.getElementById('bgColorSwatch');
bgColor.addEventListener('input', function() {
    bgHex.value = bgColor.value;
    document.body.style.backgroundColor = bgColor.value;
});

let textHex = document.getElementById('textHex');
let textColor = document.getElementById('textColorSwatch');
textColor.addEventListener('input', function() {
    textHex.value = textColor.value;
    document.body.style.color = textColor.value;
});

let linkHex = document.getElementById('linkHex');
let linkColor = document.getElementById('linkColorSwatch');
linkColor.addEventListener('input', function() {
    linkHex.value = linkColor.value;
    document.querySelectorAll('a').forEach(link => {
        link.style.color = linkColor.value;
    });
});

const fontSizeDisplay = document.getElementById('fontSizeDisplay');
function decreaseFontSize() {
    let currentFontValue = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontValue)) {
        currentFontValue--;
        fontSizeDisplay.textContent = currentFontValue;
    }
};

let subtractFontSize = document.getElementById('subtractFontSize');
subtractFontSize.addEventListener('click', () => {
    decreaseFontSize();
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
        let currentFontSize = parseFloat(window.getComputedStyle(textSize).fontSize);
        textSize.style.fontSize = (currentFontSize -1) + 'px';
    });
});

function increaseFontSize() {
    let currentFontValue = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontValue)) {
        currentFontValue++;
        fontSizeDisplay.textContent = currentFontValue;
    }
};

let addFontSize = document.getElementById('addFontSize');
addFontSize.addEventListener('click', () => {
    increaseFontSize();
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
        let currentFontSize = parseFloat(window.getComputedStyle(textSize).fontSize);
        textSize.style.fontSize = (currentFontSize +1) + 'px';
    });
});