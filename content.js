chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeBgColor") {
        document.body.style.backgroundColor = request.color;
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeTextColor") {
        document.body.style.color = request.color;
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeLinkColor") {
        document.querySelectorAll('a').forEach(link => {
            link.style.color = request.color;
        });
    }
});

const fontSizeDisplay = document.getElementById('fontSizeDisplay');

let subtractFontSize = document.getElementById('subtractFontSize');
subtractFontSize.addEventListener('click', () => {
    let currentFontValue = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontValue)) {
        currentFontValue--;
        fontSizeDisplay.textContent = currentFontValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
        let currentFontSize = parseFloat(window.getComputedStyle(textSize).fontSize);
        textSize.style.fontSize = (currentFontSize -1) + 'px';
    });
});
let addFontSize = document.getElementById('addFontSize');
addFontSize.addEventListener('click', () => {
    let currentFontValue = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontValue)) {
        currentFontValue++;
        fontSizeDisplay.textContent = currentFontValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
        let currentFontSize = parseFloat(window.getComputedStyle(textSize).fontSize);
        textSize.style.fontSize = (currentFontSize +1) + 'px';
    });
});

const lineHeightDisplay = document.getElementById('lineHeightDisplay');

let subtractLineHeight = document.getElementById('subtractLineHeight');
subtractLineHeight.addEventListener('click', () => {
    let currentLineValue = parseFloat(lineHeightDisplay.textContent);
    if (!isNaN(currentLineValue)) {
        currentLineValue--;
        lineHeightDisplay.textContent = currentLineValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textHeight => {
        let currentLineHeight = parseFloat(window.getComputedStyle(textHeight).lineHeight);
        textHeight.style.lineHeight = (currentLineHeight -1) + 'px';
    });
});
let addLineHeight = document.getElementById('addLineHeight');
addLineHeight.addEventListener('click', () => {
    let currentLineValue = parseFloat(lineHeightDisplay.textContent);
    if (!isNaN(currentLineValue)) {
        currentLineValue++;
        lineHeightDisplay.textContent = currentLineValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textHeight => {
        let currentLineHeight = parseFloat(window.getComputedStyle(textHeight).lineHeight);
        textHeight.style.lineHeight = (currentLineHeight +1) + 'px';
    });
});

const letterSpaceDisplay = document.getElementById('letterSpaceDisplay');

subtractLetterSpace = document.getElementById('subtractLetterSpace').addEventListener('click', () => {
    let currentSpacingValue = parseFloat(letterSpaceDisplay.textContent);
    if (!isNaN(currentSpacingValue)) {
        currentSpacingValue--;
        letterSpaceDisplay.textContent = currentSpacingValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSpacing => {
        let computedLetterSpace = window.getComputedStyle(textSpacing).letterSpacing;
        let currentLetterSpace = computedLetterSpace === "normal" ? 0 : parseFloat(computedLetterSpace);
        textSpacing.style.letterSpacing = (currentLetterSpace -1) + 'px';
    });
});
addLetterSpace = document.getElementById('addLetterSpace').addEventListener('click', () => {
    let currentSpacingValue = parseFloat(letterSpaceDisplay.textContent);
    if (!isNaN(currentSpacingValue)) {
        currentSpacingValue++;
        letterSpaceDisplay.textContent = currentSpacingValue;
    }
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSpacing => {
        let computedLetterSpace = window.getComputedStyle(textSpacing).letterSpacing;
        let currentLetterSpace = computedLetterSpace === "normal" ? 0 : parseFloat(computedLetterSpace);
        textSpacing.style.letterSpacing = (currentLetterSpace +1) + 'px';
    });
});