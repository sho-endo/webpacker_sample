document.addEventListener('DOMContentLoaded', () => {
  let status = 0; // 0:停止中 1:動作中
  let time = 0;
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const resetBtn = document.getElementById('resetBtn');
  const timerLabel = document.getElementById('timerLabel');

  startBtn.addEventListener('click', () => {
    status = 1;
    startBtn.disabled = true;
    resetBtn.disabled = true;
    timer();
  });

  stopBtn.addEventListener('click', () => {
    status = 0;
    startBtn.disabled = false;
    resetBtn.disabled = false;
  });

  resetBtn.addEventListener('click', () => {
    if (status === 1) return;
    status = 0;
    time = 0;
    timerLabel.innerHTML = '00:00:00';
    startBtn.disabled = false;
  });

  const timer = () => {
    if (status === 1) {
      setTimeout(() => {
        time++;

        let min = Math.floor(time/100/60);
        let sec = Math.floor(time/100);
        let mSec = time % 100;

        if (min < 10) min = "0" + min;

        if (sec >= 60) sec = sec % 60;

        if (sec < 10) sec = "0" + sec;


        if (mSec < 10) mSec = "0" + mSec;

        timerLabel.innerHTML = min + ":" + sec + ":" + mSec;

        timer();
      }, 10)
    }
  }
});
