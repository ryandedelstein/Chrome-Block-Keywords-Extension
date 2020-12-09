chrome.webNavigation.onCompleted.addListener(function(details) {
    //start function
    chrome.tabs.query({}, function (tabs) {

        for (var i = 0; i < tabs.length; i++) {

            if (bad_url(tabs[i].url)) {

                chrome.tabs.remove(tabs[i].id);

            }

        }
    });
    //end function
});


//returns true if contains one of the key words
function bad_url(url) {

    var bad_words = ["youtube", "facebook", "instagram", "bustabit"];

    for(var i = 0; i < bad_words.length; i++) {

        if(url.includes(bad_words[i])) {

            return true;

        }

    }
    
    return false;
}