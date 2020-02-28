/*chrome.storage.local.set({'hello': 'world'}, function() {
    console.log('Value is set to ' + 'world');
});
chrome.storage.local.get(['hello'], function(result) {
    console.log('Value currently is ' + JSON.stringify(result));
});*/

chrome.runtime.onMessage.addListener( function(message){
    if (message.action === 'UPDATE_STORAGE')
    {
        let key = message.key;
        let value = message[key]
        chrome.storage.local.set({key: value}, function() {
            console.log('Value is set to ' + 'world');
        });
    }
    else if (message.action === 'GATHER_STORAGE')
    {
        let key = 'URL_Detection_info'
        let value = 'chicken tenders'
        chrome.storage.local.set({key: value}, function() {
            console.log('Value is set to ' + 'chicken tenders');
        });
        chrome.runtime.sendMessage({ action: "TESTING_MESSAGE"});
    }
})