// Pseudo-code

// When planner is opened, current date is displayed at the top (moment.js)
// <p id="currentDay" class="lead"></p> 

// When scrolling down, timeblocks are displayed // with standard business hours (moment.js)
// <div id="hour-12" class="row time-block">
// <div class="col-md-1 hour">
//   12PM
// </div>
// <textarea class="col-md-10 description"> </textarea>
// <button class="btn saveBtn col-md-1">
//   <i class="fas fa-save"></i>
// </button>
// </div>

// Timeblocks are color coded for past, present and future ()
// Gray block is past (id="hour-9")
// Red block is past (id="hour-10")
// Green block is past (id="hour-11")

// When user clicks on a time block, an event can be added (jQuery .on click)
// When click save, data is stored and displayed (JSON)
// When refreshing the page, saved events remain