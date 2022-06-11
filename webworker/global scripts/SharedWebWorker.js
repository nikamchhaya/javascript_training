var connections = 0; 
self.addEventListener("connect", function (e) {
    var port = e.ports[0];
    connections++;
    var strTime = getTime();
    port.addEventListener("message", function (e) {
    port.postMessage("Connected with " + e.data + " at   " + strTime +"<br/> Connection number: " + connections);
    }, false);
    port.start();}, false);
