window.onload = function() {
    var heading = document.getElementById("heading");
    var initialFontSize = window.getComputedStyle(heading).getPropertyValue('font-size');
    document.getElementById("range").value = parseInt(initialFontSize);
    vac();
};

function vac(){
   var u = document.getElementById("range").value;
   var heading = document.getElementById("heading");
   heading.style.fontSize = u +"px";
   var text = document.getElementById("text");
   text.innerHTML = "Your font size is "+u+ " px"; 
}