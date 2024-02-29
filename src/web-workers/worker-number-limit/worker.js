onmessage = function(event) {
    var i = event.data; 

    postMessage(i);
};