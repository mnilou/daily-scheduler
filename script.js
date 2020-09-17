// Pseudo-code

// 3. Timeblocks are color coded for past, present and future ()
// Gray block is past (id="hour-9")
// Red block is past (id="hour-10")
// Green block is past (id="hour-11")

// 1. When planner is opened, current date is displayed at the top (moment.js)
// <p id="currentDay" class="lead"></p>
$(document).ready(function () {
  var m = document.querySelector("#currentDay");
  m.textContent = moment().format("dddd[,] MMMM Do YYYY");

  let currentHour = m.hours();

  // 2. When scrolling down, timeblocks are displayed // with standard business hours (moment.js)
  // <div id="hour-12" class="row time-block">

  // Empty array to store values entered in textarea input by user
  var scheduleItems = [];

  // 4. When user clicks on a time block, an event can be added (jQuery .on click)
  $(".description").on("click", function () {
    scheduleItems.preventDefault();

    // Code to create an area to write the entered value
    var inputEl = $("<p>");
    inputEl.text(inputSchedule);
    $(".description").append(textEl);

    // Code to push input of schedule into array if the input is NOT equal to an empty string
    if (scheduleAgenda !== "") {
      for (var i = 0; i < scheduleItems.length; i++) {
        var inputSchedule = $(".description").val();

        scheduleItems.push(inputSchedule);

        localStorage.setItem("scheduleItems", JSON.stringify(scheduleItems));
        $(".description").text(scheduleItems);
        $(".description").html(scheduleItems[i]);
      }
    } else return;
  });

  // 5. When click #saveBtn, data is stored and displayed (JSON)
  var savedSchedule = JSON.parse(localStorage.getItem("scheduleItems"));

  if (storedScheduleItems !== "") {
    scheduleItems = storedScheduleItems;
  }

  // 6. When refreshing the page, saved events remain in local storage
  $(".saveBtn").on("click", scheduleSet());
  console.log(scheduleSet);
});
