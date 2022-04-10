// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//website is basically a modified table.
//3 columns
//  1. TIME
//  2. ACTIVITY (INPUT)
//  3. SAVE BUTTON
//OTHER THINGS WE WILL NEED
//  1. MOMENT.JS
//      - .ISBEFORE / .ISAFTER (WORK REGARDLESS OF MILITARY TIME)
//  2. USE DIVS, EACH 3 CHILDREN
//  3. BOOTSTRAP