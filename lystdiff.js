// Uses code from Stackoverflow and Github

var HttpClient = function() {
    // Credit to tggagne on stackoverflow for this code segment https://stackoverflow.com/a/22076667
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
    // hide output area and initilialize taggle
    document.getElementById('outputarea').style.display = "none";
    document.getElementById('loadingscreen').style.display = "none";
    tagg = new Taggle('inputarea', {duplicateTagClass: 'repeated', saveOnBlur:true, 
    preserveCase:true, placeholder: "Enter the short Bagoum deck URLs (ie. bagoum.com/db/XXX)"})
}

function submit(){
    // read in lists from taggle, filter out invalid values
    var tags = tagg.getTagValues();
    var lists = []

    for (var i = 0; i < tags.length; i++){
        var valid = false;
        var tex = tags[i];
        tex = tex.toLowerCase();
        if (tex.includes("bagoum.com/db/") && tex.split("/").pop().length <= 5){
            valid = true;
        }

        if (valid){
            lists.push(tags[i]);
        }
    }

    if (lists.length > 0){
        console.log(lists);
        document.getElementById("buttonwrap").style.display = "none";
        tagg.removeAll();
        document.getElementById("areawrap").style.display = "none";
        document.getElementById("loadingscreen").style.display = "block";
    }
    
}

function handleLists(lists){
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
