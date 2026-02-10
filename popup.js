let bgHex = document.getElementById('bgHex');
let bgColor = document.getElementById('bgColorSwatch');
bgColor.addEventListener('input', () => {
    bgHex.value = bgColor.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeBgColor",
            color: bgColor.value
        });
    });
});

let textHex = document.getElementById('textHex');
let textColor = document.getElementById('textColorSwatch');
textColor.addEventListener('input', () => {
    textHex.value = textColor.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeTextColor",
            color: textColor.value
        });
    });
});

let linkHex = document.getElementById('linkHex');
let linkColor = document.getElementById('linkColorSwatch');
linkColor.addEventListener('input', () => {
    linkHex.value = linkColor.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeLinkColor",
            color: linkColor.value
        });
    });
});

const fontSizeDisplay = document.getElementById('fontSizeDisplay');
let subtractFontSize = document.getElementById('subtractFontSize');
subtractFontSize.addEventListener('click', () => {
    let currentFontDisplay = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontDisplay)) {
        currentFontDisplay--;
        fontSizeDisplay.innerHTML = (currentFontDisplay > 0 ? '+' : '') + currentFontDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeFontSize",
            amount: -1
        });
    });
});
let addFontSize = document.getElementById('addFontSize');
addFontSize.addEventListener('click', () => {
    let currentFontDisplay = parseFloat(fontSizeDisplay.textContent);
    if (!isNaN(currentFontDisplay)) {
        currentFontDisplay++;
        fontSizeDisplay.innerHTML = (currentFontDisplay > 0 ? '+' : '') + currentFontDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeFontSize",
            amount: +1
        });
    });
});

const lineHeightDisplay = document.getElementById('lineHeightDisplay');
let subtractLineHeight = document.getElementById('subtractLineHeight');
subtractLineHeight.addEventListener('click', () => {
    let currentHeightDisplay = parseFloat(lineHeightDisplay.textContent);
    if (!isNaN(currentHeightDisplay)) {
        currentHeightDisplay--;
        lineHeightDisplay.innerHTML = (currentHeightDisplay > 0 ? '+' : '') + currentHeightDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeLineHeight",
            amount: -1
        });
    });
});
let addLineHeight = document.getElementById('addLineHeight');
addLineHeight.addEventListener('click', () => {
    let currentHeightDisplay = parseFloat(lineHeightDisplay.textContent);
    if (!isNaN(currentHeightDisplay)) {
        currentHeightDisplay++;
        lineHeightDisplay.innerHTML = (currentHeightDisplay > 0 ? '+' : '') + currentHeightDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeLineHeight",
            amount: +1
        });
    });
});

const letterSpaceDisplay = document.getElementById('letterSpaceDisplay');
subtractLetterSpace = document.getElementById('subtractLetterSpace').addEventListener('click', () => {
    let currentSpacingDisplay = parseFloat(letterSpaceDisplay.textContent);
    if (!isNaN(currentSpacingDisplay)) {
        currentSpacingDisplay--;
        letterSpaceDisplay.innerHTML = (currentSpacingDisplay > 0 ? '+' : '') + currentSpacingDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeLetterSpacing",
            amount: -1
        });
    });
});
addLetterSpace = document.getElementById('addLetterSpace').addEventListener('click', () => {
    let currentSpacingDisplay = parseFloat(letterSpaceDisplay.textContent);
    if (!isNaN(currentSpacingDisplay)) {
        currentSpacingDisplay++;
        letterSpaceDisplay.innerHTML = (currentSpacingDisplay > 0 ? '+' : '') + currentSpacingDisplay;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeLetterSpacing",
            amount: +1
        });
    });
});