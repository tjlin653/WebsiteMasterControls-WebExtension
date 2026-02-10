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