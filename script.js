// getting the date at the top out of the way lol

var currentDay = $("#currentDay");
var currentDayMoment = moment().format("dddd, MMMM Do");
currentDay.text(currentDayMoment)

// hour variable and other variables for time slots to change colors

var currentHour = moment().hour();

var hourSlots = $(".timeSlot").toArray();

console.log(hourSlots)


for (var i = 0; i < hourSlots.length; i++) {
    var hourPlus = (i+9);
    console.log(hourSlots[i])
    if (hourPlus > currentHour){
        hourSlots[i].classList.add("future");
    } else if (hourPlus == currentHour) {
        hourSlots[i].classList.add("present")
    } else {
        hourSlots[i].classList.add("past")
    }
}