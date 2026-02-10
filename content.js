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

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeFontSize") {
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
            let currentFontSize = parseFloat(window.getComputedStyle(textSize).fontSize);
            textSize.style.fontSize = (currentFontSize + request.amount) + 'px';
        });
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeLineHeight") {
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSize => {
            let currentLineHeight = parseFloat(window.getComputedStyle(textSize).lineHeight);
            textSize.style.lineHeight = (currentLineHeight + request.amount) + 'px';
        });
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "changeLetterSpacing") {
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, li').forEach(textSpacing => {
            let computedLetterSpace = window.getComputedStyle(textSpacing).letterSpacing;
            let currentLetterSpace = computedLetterSpace === "normal" ? 0 : parseFloat(computedLetterSpace);
            textSpacing.style.letterSpacing = (currentLetterSpace + request.amount) + 'px';
        });
    }
});