// getting the date at the top out of the way lol

var currentDay = $("#currentDay");
var currentDayMoment = moment().format("dddd, MMMM Do");
currentDay.text(currentDayMoment)

// hour variable and other variables for time slots to change colors
var saveButton = $(".saveBtn");

var currentHour = moment().hour();

var hourSlots = $(".timeSlot").toArray();

var saveButtonGroup = $(".saveBtn").toArray();




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

function renderTasks(){
    for (var i = 0; i < hourSlots.length; i++){

    }
}


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

saveButton.on("click", saveTask);





