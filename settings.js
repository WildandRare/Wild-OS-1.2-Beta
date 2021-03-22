change()

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ", 0.7)";
}



localStorage.setItem("bd", "url(https://www.publicdomainpictures.net/pictures/20000/velka/orangeyellow-background-1328283264Q9r.jpg)")
function changeSettingColor(object, color) {
    var col = document.getElementById("background_personalization").value;
    //localStorage.setItem("#dockeraa", hexToRGB(color).toString())
    localStorage.setItem("bd", document.getElementById("bd").value)
    localStorage.setItem("sbd", document.getElementById("background_personalization").value.toString())
}

function docknormal() {
    localStorage.setItem("#dockeraa", "rgba(0, 0, 0, 0.5)")
    document.getElementById("dock").style.backgroundColor = localStorage.getItem("#dockeraa")
}


function widgetVis() {
    setInterval(function() {localStorage.setItem("w.v.", document.getElementById("wv").value);}, 1)
    
}

function change() {
    //setInterval(function () {document.getElementById("dock").style.backgroundColor = localStorage.getItem("#dockeraa")}, 1)
    setInterval(function () {document.getElementById("timewidget").style.display = localStorage.getItem("w.v.")}, 1)
    setInterval(function () {document.getElementById("wildassistantwidget").style.display = localStorage.getItem("w.v.")}, 1)
    setInterval(function () {document.getElementById("mainbody").style.backgroundImage = localStorage.getItem("bd");}, 1)
    setInterval(function () {document.getElementById("mainbody").style.backgroundColor = localStorage.getItem("sbd");}, 1)
}
