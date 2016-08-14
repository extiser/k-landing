var deadline = $('.js-timer').data('time');

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

function initializeClock(element, endtime){
  // var clock = document.querySelectorAll(element);
  var clock = $(element);
  var daysSpan = clock.children('.js-timer-days');
  var hoursSpan = clock.children('.js-timer-hours');
  var minutesSpan = clock.children('.js-timer-minutes');
  var secondsSpan = clock.children('.js-timer-seconds');
  
  var timeinterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    daysSpan.html(t.days + ' д');
    hoursSpan.html(t.hours + ' ч');
    minutesSpan.html(t.minutes + ' м');
    secondsSpan.html(('0' + t.seconds).slice(-2) + ' с');
    
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
initializeClock('.js-timer', deadline);
