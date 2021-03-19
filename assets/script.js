window.onload =function () {
    nineSlot ();
    timeTracker();
}



//Current time display
var currentDay = moment().format("dddd LL");
$('#currentDay').append(currentDay);

var currentTime = moment().format("LT");
$('#currentTime').append(currentTime);

//functions for color coded timeblocks, past,present,future

function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-blocks").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

function nineSlot () {
    var input_textarea = document.querySelector("#nine");
    var output_div = document.querySelector("#nine");
    var save_button = document.querySelector("#button-9");

    save_button.addEventListener("click" , updateOutput);

    output_div.textContent = localStorage.getItem("content")
    input_textarea.value = localStorage.getItem("content");

    function updateOutput () {
        localStorage.setItem("content", input_textarea.value);
    }
}













