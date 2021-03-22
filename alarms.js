localStorage.setItem("alarms.hour", "none")
localStorage.setItem("alarms.minute", "none")
localStorage.setItem("alarms.date", "none")
localStorage.setItem("alarms.name", "none")
localStorage.setItem("alarms.description", "none")
localStorage.setItem("alarms.type", "none")
/*var alarms = [
    {
        hour: 19,
        minute: 57
    }
] */

var alarmer = [
    {
     hour: 0, 
     minute: 0,
     date: 0,
     jsims: "jsims", 
        name: "jsims",
        description: "JSIMS",
        type: "JSIMS"
    }
];










function fullDate() {
 	var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    if (day.toString().length == 1){
     if (month.toString().length == 1) {
      var fulldate = year + "-0" + month + "-0" + day;
     } else {
        var fulldate = year + "-" + month + "-0" + day;
     }
    } else {
         if (month.toString().length == 1) {
      var fulldate = year + "-0" + month + "-" + day;
     } else {
        var fulldate = year + "-" + month + "-" + day;
     }
    }
    return fulldate;
}









/*
setInterval(function() {

      var hrc = new Date();
  var hr = hrc.getHours();
      var mec = new Date();
  var me = mec.getMinutes();
    
          var mdc = new Date();
  var md = mdc.getMilliseconds();
    
              var sdc = new Date();
  var sd = mdc.getSeconds();
    for (var i = 0; i < alarms.length; i++) {
                if (hr == alarms[i].hour) {

                if (me == alarms[i].minute) {

                    if (sd == 1) {

                               document.get
        }    

                }

        }
    }


}, 1) */

setInterval(function() {
      var hrc = new Date();
  var hr = hrc.getHours();
      var mec = new Date();
  var me = mec.getMinutes();
    
          var mdc = new Date();
  var md = mdc.getMilliseconds();
    
              var sdc = new Date();
  var sd = mdc.getSeconds();
    for (var i = 0; i < alarmer.length; i++) {

            if (hr == alarmer[i].hour) {

                if (me == alarmer[i].minute) {
                    
                        if (sd == 1 && fullDate() == alarmer[i].date) {
                             
                                 document.getElementById("alarmsring").style.display = "block";
                        document.getElementById("jsims").innerHTML = alarmer[i].name;
                        document.getElementById("des").innerHTML = fullDate() == alarmer[1].date;
                             
                                
                            
                               
        }
                    
                        

                }

        }
        
                
    }


}, 1)


function convert12to24(time) {

   
        return parseInt(time) + 12;

}

function setAlarm() {
    var houri = document.getElementById("hr").value;
    var minutei = document.getElementById("me").value;
    var hourset = houri;
    var date = document.getElementById("date").value;
    var jsims = document.getElementById("ampm").value;
    var name = document.getElementById("name").value;
    var descriptionset = document.getElementById("description").value;
    var type = document.getElementById("alarmtype").value;
              if (jsims == "PM") {
                  hourset = convert12to24(houri); 
              } else {
                 hourset = houri;
              }
    
    
    localStorage.setItem("alarms.hour", hourset)
                          localStorage.setItem("alarms.minute", minutei)
    localStorage.setItem("alarms.date", date)
    localStorage.setItem("alarms.jsims", jsims)
    localStorage.setItem("alarms.name", name)
    localStorage.setItem("alarms.description", descriptionset)
    localStorage.setItem("alarms.type", type)
    alert("Your Alarm has been set.")
}

function testAlarmReceiver() {
    
        var alarmssethour = localStorage.getItem("alarms.hour");
    var alarmssetminute = localStorage.getItem("alarms.minute");
    var alarmssetdate = localStorage.getItem("alarms.date");
    var alarmssetjsims = localStorage.getItem("alarms.jsims");
    var alarmssetname = localStorage.getItem("alarms.name")
    var alarmsdescription = localStorage.getItem("alarms.description")
    var alarmssettype = localStorage.getItem("alarms.type")
    if (alarmssethour != "none") {
        alarmer.push({hour: alarmssethour, minute: alarmssetminute, date: alarmssetdate, jsims: alarmssetjsims, name: alarmssetname, description: alarmsdescription, type: alarmssettype})
        localStorage.setItem("alarms.hour", "none")
        localStorage.setItem("alarms.minute", "none")
        localStorage.setItem("alarms.date", "none")
        localStorage.setItem("alarms.jsims", "none")
        localStorage.setItem("alarms.name", "none")
        localStorage.setItem("alarms.description", "none")
        localStorage.setItem("alarms.type", "none")
    }
    
    
    
    
}