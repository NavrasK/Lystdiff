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

var tagg;

var lists = [];

function init(){
    document.getElementById('outputarea').style.display = "none";
    tagg = new Taggle('inputarea', {duplicateTagClass: 'repeated', 
    preserveCase:true, placeholder: "Enter the short Bagoum deck URLs (ie. bagoum.com/db/XXX)"})
}

function readLists(){
    // read in lists from taggle, filter out invalid values
}

function handleLists(){
    // convert the lists to the proper url format, then feed into getDecklist(), then call processLists()
}

function getDeckList(url){
    var client = new HttpClient();
    client.get(url, function(response) {
        lists.push(JSON.parse(response))
    });
}

function processLists(){

}
