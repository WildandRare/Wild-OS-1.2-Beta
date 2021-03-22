var response = {
    words : [
        {
            inputtext: "HI",
            output: "Hey There!"
        },
        {
            inputtext: "HELLO",
            output: "Hi!"
        },
        {
            inputtext: "GOOD",
            output: "That's nice!"
        },
        {
            inputtext: "HEY",
            output: "Hi!"
        },
         {
            inputtext: "HEYA",
            output: "Hi!"
        }
        
    ],
    
    
    

    
    
    //below are the phrases
    phrases : [
            {
            inputtext: "WHAT CAN YOU DO",
            output: "You can try, give me a joke!"
        },
        {
            inputtext: "GIVE ME A JOKE",
            output: ["Maybe later.", "Okay!", "Soon.", "No. Rejected."]
        },
        {
            inputtext: "YOU ARE MEAN",
            output: "Me? Mean? Think again!"
        },
                {
            inputtext: "HOW ARE YOU",
            output: "I'm good! How are you?"
        },
        {
            inputtext: "WHAT IS UP",
            output: "Nothing!"
        },
        {
            inputtext: "WHAT'S UP",
            output: "Nothing!"
        },
    ],
    
    statements : [
        {
            //
            inputtext: "SAY",
            output: function (calculate) {
                if (calculate) {
                  var res = calculate.split("SAY")[1];
                  return res.charAt(1).toUpperCase() + res.substr(2).toLowerCase();
                }
            }
            //
        },
                {
            //
            inputtext: "PLAY THE SONG",
            output: function (calculate) {
                if (calculate) {
                  var res = calculate.split("PLAY THE SONG")[1];
                  return "Sorry. I can't play the song " + res.charAt(1).toUpperCase() + res.substr(2).toLowerCase();
                }
            }
            //
        },
                        {
            //
            inputtext: "ADD",
            output: function (calculate) {
                if (calculate) {
    	var res = parseInt(calculate.split("ADD")[1]) + parseInt(calculate.split("PLUS")[1])
        return res;
                }
            }
            //
        },

    ]
    
}

function scanreturn() {
	var str = document.getElementById("inputtextarea").value.toUpperCase();
  var results = 0;
  /*var i;
  var results = 0;
  var len = Object.keys(response.words).length;
  for (i = 0; i < len; i++) {
    if(str.includes(response.words[i].inputtext)) {
      let out = response.words[i].output;
      if (out) {
        alert(out);
        results++;
      }
    }
  }*/
  var i; 
  var len = Object.keys(response.statements).length;
  for (i = 0; i < len; i++) {
    if(str.includes(response.statements[i].inputtext)) {
      let out = response.statements[i].output(str);
      if (out) {
        alert(out);
        results++;
      }
    }
  }


  if (results == 0) {
    var i;
    var len = Object.keys(response.phrases).length;
    for (i = 0; i < len; i++) {
      if(str.includes(response.phrases[i].inputtext)) {
        let out = response.phrases[i].output;
        if (out) {
          alert(out);
          results++;
        }
      }
    }
  }
    
  if (results == 0) {
    var i;

    var len = Object.keys(response.words).length;
    for (i = 0; i < len; i++) {
      if(str.includes(response.words[i].inputtext)) {
        let out = response.words[i].output;
        if (out) {
          alert(out);
          results++;
        }
      }
    }
  }
    
  if (results == 0) {
  	alert("I don't understand");
  }
}