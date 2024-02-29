const result = document.querySelector('.debug');

var workers = new Array();
var worker_index = 0;
for (var i=0; i < 50; i++) {
    workers[worker_index] = new Worker('worker.js');
    workers[worker_index].onmessage = function(event) {
        result.append('worker.onmessage i = ' + event.data + "\n\r");
    };
    workers[worker_index].postMessage(i); // start the worker.      

    worker_index++;
}   