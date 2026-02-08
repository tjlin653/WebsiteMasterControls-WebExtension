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

let subtractFontSize = document.getElementById('subtractFontSize');
let addFontSize = document.getElementById('addFontSize');
subtractFontSize.addEventListener('click', () => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a').forEach(font => {
        
    });
});