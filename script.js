// created global variables to be accessed later
const saveButton = document.querySelector(".saveBtn");
var timeBlock = document.querySelector(".time-block");
var currentDay = document.getElementById("currentDay");
var currentHour = parseInt(dayjs().format("H"));
var userInput = document.querySelector(".input");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // created click event listener to run the function and save userInput to local storage
  saveButton.addEventListener("click", function (){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  // get items from local storage using id element of hour and class element description for the text
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

  // Add code to display the current date in the header of the page.
  currentDay.innerText = dayjs().format("dddd MMMM D")


  // created function to compare if userhour was the same as the hour timeblock and then update style accordingly
  document.addEventListener("DOMContentLoaded", updateHour())

  function updateHour() {
    $(".time-block").each(function () {
      var blockHour = parseInt(
        $(this).attr("id")
      )
      console.log(blockHour)
      if (blockHour < currentHour) {
        $(this).addClass("past");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      };
    })
  }
});