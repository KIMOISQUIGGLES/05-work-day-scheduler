console.log("I am linked!")
//DEFINE HTML ELEMENTS AS VARIABLES
//PST CLOCK
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#worldClock')
    update();
    setInterval(update, 1000);
});


//TIME SLOT VARIABLES
$("#9am").children(".task").text(JSON.parse(localStorage.getItem("timeSlot9am")));

$("#10am").children(".task").text(JSON.parse(localStorage.getItem("timeSlot10am")));

$("#11am").children(".task").text(JSON.parse(localStorage.getItem("timeSlot11am")));

$("#12pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot12pm")));

$("#1pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot1pm")));

$("#2pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot2pm")));

$("#3pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot3pm")));

$("#4pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot4pm")));

$("#5pm").children(".task").text(JSON.parse(localStorage.getItem("timeSlot5pm")));



//TIME WITHIN TIME SLOT
var time = $(".timeSlot");
var task = $(".task");
var saveButtonEl = $(".saveButton");

//NECESSARY FUNCTIONS
//FUNCTION: CHANGE COLOR BASED ON TIME
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var momentArray = moment().toArray();
for (let i=1; i<10; i++) {
    if (timeArray[i-1] == momentArray[3]) {
        $('.schedule').children().eq(i).children().eq(1).css("background-color", "red")
    } if(timeArray[i-1] < momentArray[3]){
        $('.schedule').children().eq(i).children().eq(1).css("background-color", "gray")
    } if (timeArray[i-1] > momentArray[3]){
        $('.schedule').children().eq(i).children().eq(1).css("background-color", "aquamarine")
    }
}


$(saveButtonEl).on('click', function () {
    $(this).parent().children().eq(1).text();
    console.log($(this).parent().children().eq(1).text());

    console.log($(this).parent().attr('id'))
    if ($(this).parent().attr('id') === $("#9am").attr('id')) {
        $("#9am").children().eq(1).text()
        localStorage.setItem("timeSlot9am", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#10am").attr('id')) {
        $("#10am").children().eq(1).text()
        localStorage.setItem("timeSlot10am", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#11am").attr('id')) {
        $("#11am").children().eq(1).text()
        localStorage.setItem("timeSlot11am", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#12pm").attr('id')) {
        $("#12pm").children().eq(1).text()
        localStorage.setItem("timeSlot12pm", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#1pm").attr('id')) {
        $("#1pm").children().eq(1).text()
        localStorage.setItem("timeSlot1pm", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#2pm").attr('id')) {
        $("#2pm").children().eq(1).text()
        localStorage.setItem("timeSlot2pm", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#3pm").attr('id')) {
        $("#3pm").children().eq(1).text()
        localStorage.setItem("timeSlot3pm", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#4pm").attr('id')) {
        $("#4pm").children().eq(1).text()
        localStorage.setItem("timeSlot4pm", JSON.stringify($(this).siblings(".task").text()))
;
    }
    if ($(this).parent().attr('id') === $("#5pm").attr('id')) {
        $("#5pm").children().eq(1).text()
        localStorage.setItem("timeSlot5pm", JSON.stringify($(this).siblings(".task").text()))
;
    }

})