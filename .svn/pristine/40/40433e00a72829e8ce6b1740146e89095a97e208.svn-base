document.addEventListener('DOMContentLoaded', () => {
  const tabs = getEl('.tab > button');
  const contents = getEl('.content > div');

  tabs.forEach(function (tab, index) {
    tab.addEvent('click', function () {
      tabs.forEach((item) => item.removeClass('on'));
      contents.forEach((item) => item.removeClass('on'));
      tab.addClass('on');
      contents[index].addClass('on');
    });
  });

  let startTime;
  let accumulatedTime = 0;
  let isRunning = false;
  const startStopwatchBtn = getEl('.startStopwatch')[0];
  const stopStopwatchBtn = getEl('.stopStopwatch')[0];
  const resetStopwatchBtn = getEl('.resetStopwatch')[0];
  const recordStopwatchBtn = getEl('.recordStopwatch')[0];
  const stopwatchMin = getEl('.min')[0];
  const stopwatchSec = getEl('.sec')[0];
  const stopwatchMs = getEl('.ms')[0];
  const record = getEl('.record')[0];

  startStopwatchBtn.addEvent('click', function () {
    if (!isRunning) {
      startTime = Date.now();
      isRunning = true;
      requestAnimationFrame(updateStopwatch);
      startStopwatchBtn.addClass('hide');
      stopStopwatchBtn.removeClass('hide');
    }
  });

  stopStopwatchBtn.addEvent('click', function () {
    if (isRunning) {
      accumulatedTime += Date.now() - startTime;
      isRunning = false;
      stopStopwatchBtn.addClass('hide');
      startStopwatchBtn.removeClass('hide');
    }
  });

  resetStopwatchBtn.addEvent('click', function () {
    isRunning = false;
    startTime = 0;
    accumulatedTime = 0;
    stopwatchMin.DOM.textContent = '00';
    stopwatchSec.DOM.textContent = '00';
    stopwatchMs.DOM.textContent = '00';
    record.DOM.innerHTML = '';
    stopStopwatchBtn.addClass('hide');
    startStopwatchBtn.removeClass('hide');
  });

  recordStopwatchBtn.addEvent('click', function () {
    const newDiv = document.createElement('div');
    newDiv.className = 'time';

    const spanIndex = document.createElement('span');
    spanIndex.className = 'index';
    const divIndex = record.DOM.childElementCount + 1;
    spanIndex.textContent = formatIndex(divIndex);
    newDiv.appendChild(spanIndex);

    const pMin = document.createElement('p');
    pMin.className = 'min';
    pMin.textContent = stopwatchMin.DOM.textContent;
    newDiv.appendChild(pMin);

    const pDot1 = document.createElement('p');
    pDot1.className = 'dot';
    pDot1.textContent = ':';
    newDiv.appendChild(pDot1);

    const pSec = document.createElement('p');
    pSec.className = 'sec';
    pSec.textContent = stopwatchSec.DOM.textContent;
    newDiv.appendChild(pSec);

    const pDot2 = document.createElement('p');
    pDot2.className = 'dot2';
    pDot2.textContent = '.';
    newDiv.appendChild(pDot2);

    const pMs = document.createElement('p');
    pMs.className = 'ms';
    pMs.textContent = stopwatchMs.DOM.textContent;
    newDiv.appendChild(pMs);

    record.DOM.appendChild(newDiv);
  });

  function updateStopwatch() {
    if (!isRunning) return;

    const currentTime = Date.now();
    const elapsedTime = accumulatedTime + currentTime - startTime;
    const min = Math.floor(elapsedTime / 60000);
    const sec = Math.floor((elapsedTime % 60000) / 1000);
    const ms = elapsedTime % 1000;

    stopwatchMin.DOM.textContent = formatTime(min);
    stopwatchSec.DOM.textContent = formatTime(sec);
    stopwatchMs.DOM.textContent = formatMs(ms);

    requestAnimationFrame(updateStopwatch);
  }

  function formatTime(time) {
    return time.toString().padStart(2, '0');
  }

  function formatMs(ms) {
    return ms.toString().padStart(3, '0').substring(0, 2);
  }

  function formatIndex(index) {
    return index.toString().padStart(2, '0');
  }

  let timerInterval;
  let timerRunning = false;
  const startTimerBtn = getEl('.startTimer')[0];
  const stopTimerBtn = getEl('.stopTimer')[0];
  const resetTimerBtn = getEl('.resetTimer')[0];
  const timerMinInputs = getEl('.t-min input');
  const timerSecInputs = getEl('.t-sec input');
  const timerMsInputs = getEl('.t-mir input');
  const selecttime = getEl('.times > button');
  const inputs = getEl('#timer  input');

  inputs.forEach(function (input) {
    input.addEvent('click', function () {
      input.DOM.value = '';
    });
  });

  selecttime.forEach(function (time) {
    time.addEvent('click', function () {
      const selectedTime = time.DOM.getAttribute("data-time");

      const minutes = Math.floor(selectedTime / 60000);
      const seconds = Math.floor((selectedTime % 60000) / 1000);
      const milliseconds = selectedTime % 1000;

      timerMinInputs[0].DOM.value = Math.floor(minutes / 10);
      timerMinInputs[1].DOM.value = Math.floor(minutes % 10);
      timerSecInputs[0].DOM.value = Math.floor(seconds / 10);
      timerSecInputs[1].DOM.value = Math.floor(seconds % 10);
      timerMsInputs[0].DOM.value = Math.floor(milliseconds / 10);
      timerMsInputs[1].DOM.value = Math.floor(milliseconds % 10);
    });
  });

  startTimerBtn.addEvent('click', function () {
    if (!timerRunning) {
      timerRunning = true;
      timerInterval = setInterval(updateTimer, 10);
      startTimerBtn.addClass('hide');
      stopTimerBtn.removeClass('hide');
      selecttime.forEach((item) => item.addClass('on'));
      inputs.forEach((item) => item.addClass('on'));
    }
  });

  stopTimerBtn.addEvent('click', function () {
    clearInterval(timerInterval);
    timerRunning = false;
    stopTimerBtn.addClass('hide');
    startTimerBtn.removeClass('hide');
    selecttime.forEach((item) => item.removeClass('on'));
    inputs.forEach((item) => item.removeClass('on'));
  });


  function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerMinInputs.forEach((input) => (input.DOM.value = ''));
    timerSecInputs.forEach((input) => (input.DOM.value = ''));
    timerMsInputs.forEach((input) => (input.DOM.value = ''));
    stopTimerBtn.addClass('hide');
    startTimerBtn.removeClass('hide');
    selecttime.forEach((item) => item.removeClass('on'));
    inputs.forEach((item) => item.removeClass('on'));
  }

  resetTimerBtn.addEvent('click', function () {
    resetTimer();
  });

  timerMinInputs.forEach((input) => {
    input.addEvent('input', function () {
      if (input.DOM.value === '') input.DOM.value = '0';
    });
  });

  timerSecInputs.forEach((input) => {
    input.addEvent('input', function () {
      if (input.DOM.value === '') input.DOM.value = '0';
    });
  });

  timerMsInputs.forEach((input) => {
    input.addEvent('input', function () {
      if (input.DOM.value === '') input.DOM.value = '0';
    });
  });

  function updateTimer() {
    let min = Number(timerMinInputs[0].DOM.value) * 10 + Number(timerMinInputs[1].DOM.value);
    let sec = Number(timerSecInputs[0].DOM.value) * 10 + Number(timerSecInputs[1].DOM.value);
    let ms = Number(timerMsInputs[0].DOM.value) * 10 + Number(timerMsInputs[1].DOM.value);

    ms--;
    if (ms < 0) {
      sec--;
      ms = 99;
      if (sec < 0) {
        min--;
        sec = 59;
        if (min < 0) {
          resetTimer();
          return;
        }
      }
    }

    timerMinInputs[1].DOM.value = Math.floor(min % 10);
    timerMinInputs[0].DOM.value = Math.floor(min / 10);
    timerSecInputs[1].DOM.value = Math.floor(sec % 10);
    timerSecInputs[0].DOM.value = Math.floor(sec / 10);
    timerMsInputs[1].DOM.value = Math.floor(ms % 10);
    timerMsInputs[0].DOM.value = Math.floor(ms / 10);
  }
});