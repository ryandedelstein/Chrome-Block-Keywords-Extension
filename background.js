function bad_url(url) {
    var bad_words = ["youtube", "facebook", "instagram", "bustabit"];
    for(var i = 0; i < bad_words.length; i++) {
        if(url.includes(bad_words[i])) {
            return true;
        }
    }
    return false;
}

chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (bad_url(tabs[i].url)) {
                chrome.tabs.remove(tabs[i].id);
            }
        }
    });
});