$(document).ready(function () {
  // 1. When planner is opened, current date is displayed at the top (moment.js)

  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  $(".saveBtn").on("click", function () {
    // 2. When scrolling down, timeblocks are displayed // with standard business hours (moment.js)

    var activity = $(this).siblings(".description").val().trim();
    console.log(activity);
    console.log(localStorage);

    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time, activity);
  });
  // 3. Store input
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));

  // 4. Timeblocks are color coded for past, present and future ()
  startSchedule();

  function startSchedule() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function () {
      var hourChoices = parseInt($(this).attr("id").split("-")[1]);
      if (hourChoices < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present", "future");
      } else if (hourChoices === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past", "future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past", "present");
      }
    });
  }
  localStorage.clear();
});
