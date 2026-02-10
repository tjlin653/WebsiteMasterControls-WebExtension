let bgHex = document.getElementById('bgHex');
let bgColor = document.getElementById('bgColorSwatch');
bgColor.addEventListener('input', function() {
    bgHex.value = bgColor.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeBgColor",
            color: bgColor.value
        });
    });
});