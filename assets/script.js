//Current time display
var currentDay = moment().format("dddd LL");
$('#currentDay').append(currentDay);

var currentTime = moment().format("LT");
$('#currentTime').append(currentTime);

//functions for color coded timeblocks, past,present,future
var element = document.getElementById("currentTime").value;
var time = new Date.getHours();

function colorCodedTime () {
    if (element-time > 9) {
        $("#nine").addClass("past");
    } else if (time >= 9 && now < 10) {
        $("#nine").addClass("present");
    }else if (time < 9) {
        $("#nine").addClass("future");
    }
}