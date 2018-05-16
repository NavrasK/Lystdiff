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
    
}

function handleLists(lists){
    // convert the lists to the proper url format, then feed into getDecklist(), then call processLists()
    console.log("Handling");
    console.log(lists);
}

function getDeckList(url){
    
}

function processLists(){
    // combines and compares the decklists, then calls outputInfo()
}

function outputInfo(){
    // displays the combined information from all decklists
    document.getElementById("loadingscreen").style.display = "none";
}
