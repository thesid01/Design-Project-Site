function postStory(){
    var name = undefined;
    var title = undefined;
    var story = undefined;
    var rating = document.getElementById("ratingStar").value;
    console.log(rating);
    if(document.getElementById("name").value.length >0)
        name=document.getElementById("name").value;
    
    if(document.getElementById("title").value.length >0)
        title=document.getElementById("title").value;
    
    if(document.getElementById("story").value.length >0)
        story=document.getElementById("story").value;

    if(name !==undefined && title !==undefined && story !==undefined){
        var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.open("POST", "/post-story");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({name:name, title:title, content:story}));

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                if (xmlhttp.responseText){
                    if(JSON.parse(this.responseText).added==1){
                        console.log("added in db");
                        alert("Congratulations! Story Posted");
                    }else{
                        console.log("story not added");
                        alert("Sorry! Story not Posted")
                    }
                   }
            }
        };

    }
}
