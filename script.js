// getting the date at the top out of the way lol
// these functions and the text update will show current date in the header of the page on loading

var currentDay = $("#currentDay");
var currentDayMoment = moment().format("dddd, MMMM Do");
currentDay.text(currentDayMoment)

// hour variable and other variables for time slots to change colors. also array variable for the for loop later on
var saveButton = $(".saveBtn");

var currentHour = moment().hour();

var hourSlots = $(".timeSlot").toArray();




//this for loop goes through array of all timeslots and checks to see if its past present or future hour, then changes class
// of the timeslot to change the color accordingly
for (var i = 0; i < hourSlots.length; i++) {
    var hourPlus = (i+9);
    if (hourPlus > currentHour){
        hourSlots[i].classList.add("future");
    } else if (hourPlus == currentHour) {
        hourSlots[i].classList.add("present")
    } else {
        hourSlots[i].classList.add("past")
    }
}


// this function renders the local storage text into timeslots on loading the page
function renderTasks(){
    for (var i = 0; i < hourSlots.length; i++){
        var checkid = hourSlots[i].id;
        var update = hourSlots[i];
        var storageCheck = localStorage.getItem(checkid);
        if (storageCheck){
            update.innerHTML = storageCheck;
        }
    }
}

//this function is for saving the text in the timeslots
function saveTask(event){
    event.preventDefault();
    var x = event.target.parentElement; //this is the form
    console.log(x);
    var y = x.children[1].value
    console.log(y);
    var name = x.children[1].id;
    console.log(name)
    localStorage.setItem(name, y)
}


// event listener for submit button that calls on function that saves text
saveButton.on("click", saveTask);

renderTasks();




