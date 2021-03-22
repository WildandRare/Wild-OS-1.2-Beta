var mi = -2;
var waittime;
function okay(image, width, height, appname, applink) {
    mi = mi+2;
    var img = `<img src="${image}" style="width: ${width}; height: ${height}; top: 0.5vw; position: absolute; left: -0.1vw; z-index: -2;"> <h2 style="transform: rotate(90deg); color: grey; font-size: small; position: relative; top: 5vw;">${appname}</h2>`;
    var random =Math.floor(Math.random() * 5) + 5;
    var randomside =Math.floor(Math.random() *20) + 1;
    var apcv =    `
</div>
        <div style="z-index: 1; top: ${random}vw; position:relative;  left: ${randomside}vw;    ">
            <embed src="${applink}" style="position: relative; margin-top: 5vw; width: 50vw; height: 40vw; z-index: -10;">
            <div style="width: 2vw; height: 40.05vw; background-color: white; position: absolute; right: -50.5vw; top: 5vw;">
<button onclick="this.parentNode.parentNode.parentNode.remove()" style="position: absolute;  right: -1.5vw; top: 20vw;transform: rotate(90deg); font-family: 'Inter Semibold'; width: 5vw">X</button>
                <h1 style="position: relative;  right: -0.3vw; top: 7vw;transform: rotate(90deg); font-family: 'Inter Semibold';">${appname}</h1>
   </div>
        </div>`;
    var apv = document.createElement("button");   
    apv.innerHTML = img +apcv ;
    apv.style.backgroundColor = 'rgba(119, 119, 119, 0.4)';
    apv.style.width = '2vw';
    apv.style.height = '11vw';
    apv.style.zIndex = '-1';
    apv.style.position = 'absolute';
    apv.style.top = '0vw';
    apv.style.left = mi + "vw";
    document.querySelector('#dock').appendChild(apv);   
    
    
    

    
    
    
    if (mi > 8) {
        callNotiflication('You have too many apps open. You cannot open another application until you close one.');
    }
}

function opena() {
    document.querySelector('dock').style.animation = 'animationdoc  4s 2';
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    callFunction('hi')
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes