function decorate() {
    //alert("Hello World!");
    const f = document.getElementById("dtextarea");
    var fs = parseInt(f.style.fontSize);
    f.style.fontSize = ((fs * 2) + 2) + "pt";
}


function bing() {
    //alert("Hello World!");
    if (document.getElementById("chkBing").checked) {
        document.getElementById("dtextarea").style.fontWeight = "bold";
        document.getElementById("dtextarea").style.color = "green";
        document.getElementById("dtextarea").style.textDecoration = "underline";

    }
    else {
        document.getElementById("dtextarea").style.fontWeight = "normal";
        document.getElementById("dtextarea").style.color = "black";
        document.getElementById("dtextarea").style.textDecoration = "none";
    }


}