var timeandDate = moment();
var timeBlockEl = document.querySelector('.container');

$('#currentDay').text(timeandDate.format('LLLL')); 

$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12am .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));


function changeTimeColor() {

  var currentHour = timeandDate.hours();


  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);
    if (timeId < currentHour) {
      $(this).addClass('past');
    } else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }});}

$('.saveBtn').on('click', function () {
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id');
  localStorage.setItem(timeKey, textValue);
});


changeTimeColor();

setTimeout(function () {
  location = '';
}, 1000 * 60);