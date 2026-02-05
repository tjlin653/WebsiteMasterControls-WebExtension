let bgHex = document.getElementById('bgHex');
let bgColor = document.getElementById('bgColorSwatch');

bgColor.addEventListener('input', function() {
    bgHex.value = bgColor.value;
});