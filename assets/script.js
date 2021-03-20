window.onload =function () {
    nineSlot ();
    tenSlot ();
    elevenSlot ();
    twelveSlot ();
    oneSlot();
    twoSlot();
    threeSlot();
    fourSlot();
    fiveSlot();
    timeTracker();
}


//Current time display
var currentDay = moment().format("dddd LL");
$('#currentDay').append(currentDay);

var currentTime = moment().format("LT");
$('#currentTime').append(currentTime);

//functions for color coded timeblocks, past,present,future
//I feel like the timeNow variable is fine but the rest idk, I dont full understand jquery
function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    var time = document.getElementsByClassName("hour");
    var test = document.querySelectorAll(".form-control");
    
    
  for (let j = 0; j < test.length; j++) {
    for (let i = 0; i < time.length; i++) {
        var scheduleTime = time.item(i).id;
        var section = test.item(i)
        
         // To check the time and add the classes for background indicators
            if (scheduleTime < timeNow) {
                section.style.backgroundColor = "yellow";
                time.item(i).style.backgroundColor = "yellow";
            }
            else if (scheduleTime == timeNow) {
                section.style.backgroundColor = "blue";
                time.item(i).style.backgroundColor = "blue";
            }
            else if(scheduleTime > timeNow) {
                section.style.backgroundColor = "green";
                time.item(i).style.backgroundColor = "green";
        }
    }
  }

 
}

//functions for saving events to localStorage: variables included,
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

function tenSlot () {
    var input_textarea2 = document.querySelector("#ten");
    var output_div2 = document.querySelector("#ten");
    var save_button2 = document.querySelector("#button-10");

    save_button2.addEventListener("click", updateOutput2);

    output_div2.textContent = localStorage.getItem("content2")
    input_textarea2.value = localStorage.getItem("content2");

    function updateOutput2 () {
        localStorage.setItem("content2", input_textarea2.value);

        output_div2.textContent = input_textarea2.value;
    }
}


function elevenSlot () {
    var input_textarea3 = document.querySelector("#eleven");
    var output_div3 = document.querySelector("#eleven");
    var save_button3 = document.querySelector("#button-11");

    save_button3.addEventListener("click", updateOutput3);

    output_div3.textContent = localStorage.getItem("content3")
    input_textarea3.value = localStorage.getItem("content3");

    function updateOutput3 () {
        localStorage.setItem("content3", input_textarea3.value);

        output_div3.textContent = input_textarea3.value;
    }
}

function twelveSlot () {
    var input_textarea4 = document.querySelector("#twelve");
    var output_div4 = document.querySelector("#twelve");
    var save_button4 = document.querySelector("#button-12");

    save_button4.addEventListener("click", updateOutput4);

    output_div4.textContent = localStorage.getItem("content4")
    input_textarea4.value = localStorage.getItem("content4");

    function updateOutput4 () {
        localStorage.setItem("content4", input_textarea4.value);

        output_div4.textContent = input_textarea4.value;
    }
}

function oneSlot () {
    var input_textarea5 = document.querySelector("#one");
    var output_div5 = document.querySelector("#one");
    var save_button5 = document.querySelector("#button-1");

    save_button5.addEventListener("click", updateOutput5);

    output_div5.textContent = localStorage.getItem("content5")
    input_textarea5.value = localStorage.getItem("content5");

    function updateOutput5 () {
        localStorage.setItem("content5", input_textarea5.value);

        output_div5.textContent = input_textarea5.value;
    }
}

function twoSlot () {
    var input_textarea6 = document.querySelector("#two");
    var output_div6 = document.querySelector("#two");
    var save_button6 = document.querySelector("#button-2");

    save_button6.addEventListener("click", updateOutput6);

    output_div6.textContent = localStorage.getItem("content6")
    input_textarea6.value = localStorage.getItem("content6");

    function updateOutput6 () {
        localStorage.setItem("content6", input_textarea6.value);

        output_div6.textContent = input_textarea6.value;
    }
}

function threeSlot () {
    var input_textarea7 = document.querySelector("#three");
    var output_div7 = document.querySelector("#three");
    var save_button7 = document.querySelector("#button-3");

    save_button7.addEventListener("click", updateOutput7);

    output_div7.textContent = localStorage.getItem("content7")
    input_textarea7.value = localStorage.getItem("content7");

    function updateOutput7 () {
        localStorage.setItem("content7", input_textarea7.value);

        output_div7.textContent = input_textarea7.value;
    }
}

function fourSlot () {
    var input_textarea8 = document.querySelector("#four");
    var output_div8 = document.querySelector("#four");
    var save_button8 = document.querySelector("#button-4");

    save_button8.addEventListener("click", updateOutput8);

    output_div8.textContent = localStorage.getItem("content8")
    input_textarea8.value = localStorage.getItem("content8");

    function updateOutput8 () {
        localStorage.setItem("content8", input_textarea8.value);

        output_div8.textContent = input_textarea8.value;
    }
}

function fiveSlot () {
    var input_textarea9 = document.querySelector("#five");
    var output_div9 = document.querySelector("#five");
    var save_button9 = document.querySelector("#button-5");

    save_button9.addEventListener("click", updateOutput9);

    output_div9.textContent = localStorage.getItem("content9")
    input_textarea9.value = localStorage.getItem("content9");

    function updateOutput9 () {
        localStorage.setItem("content9", input_textarea9.value);

        output_div9.textContent = input_textarea9.value;
    }
}



