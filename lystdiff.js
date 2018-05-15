// Uses code from Stackoverflow, Github and https://sean.is/poppin/tags/

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
    document.getElementById("loadingscreen").style.display = "block";
    var tags = tagg.getTagValues();
    var lists = []

    for (var i = 0; i < tags.length; i++){
        var tex = tags[i];
        console.log(tags);
        tex = tex.toLowerCase();
        if (tex.includes("bagoum.com/db/") && tex.split("/").pop().length <= 5){
            var url = "https://www.bagoum.com/expand/" + tags[i].split("/").pop();
            if (checkURL(url) == true){
                lists.push(url);
            }
        }else{
            if (tex.length < 5){
                var url = "https://www.bagoum.com/expand/"+tags[i]
                if (checkURL(url) == true){
                    lists.push(url);
                }
            }
        }
    }

    if (lists.length > 0){
        console.log(lists);
        document.getElementById("buttonwrap").style.display = "none";
        tagg.removeAll();
        document.getElementById("areawrap").style.display = "none";
        handleLists(lists);
    }else{
        console.log("Invalid Inputs");
        console.log(lists);
        document.getElementById("loadingscreen").style.display = "none";
    }
}

function checkURL(url){
    var client = new HttpClient();
    url = "https://cors-anywhere.herokuapp.com/"+url;
    client.get(url, function(response) {
        console.log(response)
        if (response == "false"){
            console.log("INVALID");
            return false;
        }else{
            console.log("VALID");
            return true;
        }
    });
}

function handleLists(lists){
    // convert the lists to the proper url format, then feed into getDecklist(), then call processLists()
    console.log("Handling");
    console.log(lists);
}

function getDeckList(url){
    var client = new HttpClient();
    client.get(url, function(response) {
        lists.push(JSON.parse(response))
    });
}

function processLists(){
    // combines and compares the decklists, then calls outputInfo()
}

function outputInfo(){
    // displays the combined information from all decklists
    document.getElementById("loadingscreen").style.display = "none";
}
