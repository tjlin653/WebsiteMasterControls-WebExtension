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
const subtractFontSize = document.getElementById('subtractFontSize');
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
const addFontSize = document.getElementById('addFontSize');
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
const subtractLineHeight = document.getElementById('subtractLineHeight');
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
const addLineHeight = document.getElementById('addLineHeight');
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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
console.log(window.SpeechRecognition);
console.log(window.webkitSpeechRecognition);
document.querySelector("#micBtn").addEventListener('click', () => {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; 
    recognition.start();
    recognition.onresult = function(event) {
        const transcript = event.results[event.results.length -1][0].transcript.toLowerCase().trim();
        console.log(transcript);
        if (transcript.includes('increase font size')) {
            sendMessage({ action: 'changeFontSize', amount: +1 });
        } else if (transcript.includes('decrease font size')) {
            sendMessage({ action: 'changeFontSize', amount: -1 });
        } else if (transcript.includes('increase line height')) {
            sendMessage({ action: 'changeLineHeight', amount: +1 });
        } else if (transcript.includes('decrease line height')) {
            sendMessage({ action: 'changeLineHeight', amount: -1 });
        } else if (transcript.includes('increase letter spacing')) {
            sendMessage({ action: 'changeLetterSpacing', amount: +1 });
        } else if (transcript.includes('decrease letter spacing')) {
            sendMessage({ action: 'changeLetterSpacing', amount: -1 });
        } else { 
            console.log('command not received');
        }
    }
    recognition.onerror = function(event) {
        console.error("Speech error:", event.error);
        document.getElementById('micErrorMessage').innerHTML = "speech recognition error!"
    };
});