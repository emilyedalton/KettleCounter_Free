
  
  
  window.onload = function() {
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };
  window.addEventListener('keyup', (event) => {
    if (event.keyCode === 32) stopwatch.start();
    if (event.keyCode === 13) stopwatch.stop();
    if (event.keyCode === 82) stopwatch.reset();
    if (event.keyCode === 38) stopwatch.lap++;
    if (event.keyCode === 40) stopwatch.lap--;
    $("#laps").html(stopwatch.lap);
    console.log(stopwatch.lap)
  
  
  });
  
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
  let intervalId;
  
  let clockRunning = false;
  
  let stopwatch = {
  
    time: 0,
    lap: 0,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 0;
  
      $("#display").text("00:00");
  
      $("#laps").text("");
    },
    start: function() {
  
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      clearInterval(intervalId);
      clockRunning = false;
    },
    recordLap: function() {
  

      var converted = stopwatch.timeConverter(stopwatch.time);
  
     
  
      $("#laps").html(stopwatch.lap);
  
       stopwatch.lap++;
    
      
  },
    count: function() {
  
      stopwatch.time++;
  
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
  
  
  
