var countdown;
var timerDisplay = document.getElementById('timer');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function() {
  if (startButton.innerHTML === 'Start') {
    startCountdown();
    startButton.innerHTML = 'Stop';
    resetButton.disabled = true;
  } else {
    stopCountdown();
    startButton.innerHTML = 'Start';
    resetButton.disabled = false;
  }
});

resetButton.addEventListener('click', function() {
  resetCountdown();
});

function startCountdown() {
  var startTime = Date.now();
  var endTime = startTime + 10000; // 10 seconds
  countdown = setInterval(function() {
    var remainingTime = endTime - Date.now();
    if (remainingTime <= 0) {
      stopCountdown();
      timerDisplay.innerHTML = '0.000';
      startButton.innerHTML = 'Start';
      resetButton.disabled = false;
      return;
    }
    var seconds = (remainingTime / 1000).toFixed(3);
    timerDisplay.innerHTML = seconds;
  }, 10); // Update every 10 milliseconds
}

function stopCountdown() {
  clearInterval(countdown);
}

function resetCountdown() {
  stopCountdown();
  timerDisplay.innerHTML = '10.000';
  startButton.innerHTML = 'Start';
  resetButton.disabled = true;
}
