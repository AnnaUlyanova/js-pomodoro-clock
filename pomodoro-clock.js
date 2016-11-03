'use strict';

document.addEventListener('DOMContentLoaded', start)

function start() {
//	startTimer();
	stopTimer();
//	resetTimer();
	updateTime();
}


  //SHOW CURRENT TIME
	var currentClock = document.getElementById('time-now');
  var currentDate = document.getElementById('date-now');

  setInterval(updateTime, 1000);

  function updateTime() {
      var currentTime = new Date();

      var minutes = currentTime.getMinutes();
      var month = formatMonth(currentTime.getMonth());
      var date = currentTime.getDate();

      function formatMonth(m) {
            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return monthNames[m];
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      var separator = ":";
      if (currentTime.getSeconds() % 2 === 1) {
        separator = " ";
      }
    currentClock.innerHTML = currentTime.getHours() + separator + minutes;
    currentDate.innerHTML = month + "," + " " + date;
  };



	//POMODORO CLOCK

	var mainTime = 1500; //25 mins in seconds
	var mins;
	var secs;
	var countDownID;

	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");


	var start = document.getElementById("start");
	if (start) {
		start.addEventListener("click", startTimer, false);
	}


	var stop = document.getElementById("stop");
	if (stop) {
		stop.addEventListener("click", stopTimer, false);
	}


	var reset = document.getElementById("reset");
	if (reset) {
		reset.addEventListener("click", resetTimer, false);
	}

	function counter() {
		var minutes = document.getElementById("minutes");
		var seconds = document.getElementById("seconds");

		var mins = Math.floor(mainTime / 60);
		var secs = mainTime - mins * 60;


		if (mins < 10) {
			minutes.innerHTML = "0" + mins;
		} else {
			minutes.innerHTML = mins;
		}

		if (secs < 10) {
			seconds.innerHTML = "0" + secs;
		} else {
			seconds.innerHTML = secs;
		}


		if (mainTime === 0) {
			clearInterval(countdownID);
		}
		else {
			mainTime --;
		}

	}

	function startTimer() {
		countDownID = setInterval('counter()', 1000);
	}


	function stopTimer() {
		clearInterval(countDownID);
	}

	function resetTimer() {
		window.location.href = "index.html";
	}





//TIMER
//
// var c = 25;
//   function countDown() {
//     var c = document.getElementById("showTime").value;
//     if (c != 0 && c != "") {
//       setInterval("count()", 1000);
//     }
//   }
//
//   function count() {
//     document.getElementById("showTime").value = c;
//     c--;
//   }
