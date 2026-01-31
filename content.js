const observer = new MutationObserver(() => {
    
});
observer.observe(document.body, {subtree: true, childList: true});