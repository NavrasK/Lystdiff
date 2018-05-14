// Credit to tggagne on stackoverflow for this code segment https://stackoverflow.com/a/22076667

var HttpClient = function() {
    this.get = function(src, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", src, true);            
        anHttpRequest.send(null);
    }
}

var lists = [];

window.onload = init;

function init(){
    // initialize the window
}

function inputLists(){
    console.log("TESTING")
}

function getDeckList(url){
    var client = new HttpClient();
    client.get(url, function(response) {
        lists.push(JSON.parse(response))
    });
}
