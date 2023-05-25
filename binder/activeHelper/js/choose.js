document.addEventListener('DOMContentLoaded', () => {
  let limit = 20;
  let random = [];
  let circle = [];
  let count = 0;

  for (let i = 1; i <= limit; i++) {
    random.push(i);
    circle.push(i);
  }

  random.sort(() => 0.5 - Math.random());
  circle.sort(() => 0.5 - Math.random());

  const centerBox = getEl('.js-centerBox')[0];
  const stepBg = getEl('.js-stepBg')[0];
  const step = getEl('.js-step')[0];
  const stepText = getEl('.js-stepText')[0];
  const close = getEl('.js-close')[0];
  const reset = getEl('.js-reset')[0];
  const student = getEl('.js-student')[0];
  const studentBG = getEl('.js-studentBG')[0];
  const studentBGclose = getEl('.js-studentBGclose')[0];
  const ok = getEl('.js-ok')[0];
  const input = getEl('.js-input')[0];
  const list = document.querySelector('.js-list');

  addHoverEvent(centerBox.DOM);
  addHoverEvent(close.DOM);
  addHoverEvent(reset.DOM);
  addHoverEvent(student.DOM);
  addHoverEvent(studentBGclose.DOM);
  addHoverEvent(ok.DOM);

  centerBox.addEvent('click', () => {
    if (count < limit) {
      stepBg.addClass('on');

      for (let i = 1; i <= 20; i++) {
        step.removeClass('circle' + i);
      }

      let newDiv = document.createElement('div');
      if (count > 19) {
        step.addClass('circle' + circle[count % 20]);
        newDiv.classList.add('circle' + circle[count % 20]);
      } else {
        step.addClass('circle' + circle[count]);
        newDiv.classList.add('circle' + circle[count]);
      }
      newDiv.textContent = random[count];
      stepText.DOM.textContent = random[count];
      list.appendChild(newDiv);

      count++;
    }
  });

  close.addEvent('click', () => {
    stepBg.removeClass('on');
  });

  reset.addEvent('click', () => {
    reset_click();
  });

  function reset_click() {
    count = 0;
    random.sort(() => 0.5 - Math.random());
    circle.sort(() => 0.5 - Math.random());
    list.innerHTML = '';
  };

  student.addEvent('click', () => {
    studentBG.addClass('on');
  });

  studentBGclose.addEvent('click', () => {
    studentBG.removeClass('on');
  });

  ok.addEvent('click', () => {
    let num = Number(input.DOM.value);
    limit = num;
    random = [];
    for (let i = 1; i <= num; i++) {
      random.push(i);
    };
    reset_click();
    studentBG.removeClass('on');
  });

  input.addEvent('input', function () {
    let num = Number(input.DOM.value);
    if (num > 40) {
      input.DOM.value = '40';
    }
  });
}); // end