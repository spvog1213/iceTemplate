document.addEventListener('DOMContentLoaded', () => {
  const selectBtn = getEl('.js-selectBtn')[0];
  const num_img = getEl('.js-num_img')[0];
  const arrow = getEl('.js-arrow')[0];
  const num_wrap = getEl('.js-num_wrap > div');
  const plate = getEl('.js-plate')[0];
  const viewSelectNum = getEl('.js-viewSelectNum')[0];
  const resetBtn = getEl('.js-resetBtn')[0];
  const score = getEl('.js-score');
  const infoBtn = getEl('.js-infoBtn')[0];
  const infoImg = getEl('.js-infoImg')[0];
  let num;
  // const dish = getEl('.dish')[0];
  // console.log(dish)
  // let targetX = parseInt(dish.width());
  // let targetY = parseInt(dish.height()); 

  addHoverEvent(arrow.DOM);
  addHoverEvent(resetBtn.DOM);
  addHoverEvent(infoBtn.DOM);

  selectBtn.addEvent('click', function () {
    num_img.classList.toggle('on');
    selectBtn.classList.toggle('on');
  });
  num_wrap.forEach(function (item) {
    item.addEvent('click', function () {
      num = item.DOM.innerText;
      reset();
      resetBtn.DOM.click();
      num_wrap.forEach((nums) => nums.removeClass('select'));
      item.addClass('select');
      num_img.removeClass('on');
      selectBtn.removeClass('on');
      viewSelectNum.DOM.innerText = num;
      plate.addClass('plate' + num);

    });
    addHoverEvent(item.DOM);
  });


  resetBtn.addEvent('click', function () {
    score.forEach((item) => item.DOM.innerText = '0');
  });

  infoBtn.addEvent('click', function () {
    infoImg.classList.toggle('on');
    infoBtn.classList.toggle('select');
  });

  function reset() {
    score.forEach((item) => item.DOM.innerText = '0');
    const leng = getEl('.js-plate > div').length;
    for (let i = 1; i <= leng; i++) {
      plate.removeClass('plate' + i);
    };

  }; // 리셋


  loop(() => pageManager.quizzes).then((quizzes) => { //모든 QuizContant 불러오기
    console.log(quizzes)
    pageManager.findQuizByName('dragdropQuiz').callback = { //data-quiz-name : dragdropQuiz에 콜백 설정
      correct: (QUIZ) => {
        console.log('correct')
      }, //정답을 맞췄을 경우 console에서 correct가 적힌다.
      incorrect: (QUIZ) => {
        console.log('incorrect')
      }, //오답일 경우 console에서 incorrect가 적힌다.
      finish: (QUIZ) => {
        console.log('finish')
      }, //모두 오답이 되어 예시답을 보일 경우 console에서 finish가 적힌다.
      redo: (QUIZ) => {
        console.log('redo')
      }, //다시 풀기위해 redo버튼이 숨겨졌을 경우 console에서 redo가 적힌다.
      reset: (QUIZ) => {
        console.log('reset')
      }, //다시 풀기 버튼을 눌렀을 경우  console에서 reset가 적힌다. 
      dragCorrect: (QUIZ, dragItem, dropItem) => {
        console.log('dragCorrect: ', dragItem)
      }, //dragItem을 정답인 drop장소에 옮겼을 경우 console에서 옮긴 element를 보여준다.
      dragIncorrect: (QUIZ, dragItem) => {
        console.log('dragIncorrect: ', dragItem)
      } //dragItem을 오답인 drop장소에 옮겼을 경우 console에서 옮긴 element를 보여준다.
    }
  });

  // function drop_item_add(item) {
  //   $(item).droppable({
  //     tolerance: 'pointer',
  //     drop: function (event, ui) {
  //       var drag_item = ui.draggable;
  //       var drop_item = $(this);
  //       var score = Number($(this).parent().find('.score').html());

  //       if ($(ui.helper).hasClass("clone")) {} else {
  //         var $clone = ui.helper.clone();

  //         $('#container').append($clone);
  //         $($clone).addClass("clone");
  //         $($clone).attr("data-plate", drop_item.parent().attr('class'));
  //         $($clone).css("cursor", "pointer");

  //         if (score < 99) {
  //           if ($(drag_item).hasClass('animal1')) {
  //             if ((score + 2) < 99) {
  //               $(this).parent().find('.score').html(score + 2);
  //             } else {
  //               $(this).parent().find('.score').html(score + 1);
  //             };
  //           } else {
  //             $(this).parent().find('.score').html(score + 1);
  //           };
  //         };

  //         $($clone).draggable({
  //           start: function (event, ui) {
  //             dragClick.x = event.clientX;
  //             dragClick.y = event.clientY;
  //             org_pos.y = $(event.currentTarget).css("top");
  //             org_pos.x = $(event.currentTarget).css("left");
  //             $(this).attr("data-starty", $(event.currentTarget).css("top"));
  //             $(this).attr("data-startx", $(event.currentTarget).css("left"));
  //           },
  //           stop: function (event, ui) {
  //             var dataPlate = $(this).attr('data-plate');
  //             var score = Number($('.' + dataPlate).find('.score').html());

  //             if (score > 0) {
  //               if ($(this).hasClass('animal1')) {
  //                 if ((score - 2) > 0) {
  //                   $('.' + dataPlate).find('.score').html(score - 2);
  //                 } else {
  //                   $('.' + dataPlate).find('.score').html(score - 1);
  //                 };
  //               } else {
  //                 $('.' + dataPlate).find('.score').html(score - 1);
  //               };
  //             };
  //             $(ui.helper).remove();
  //           },
  //           drag: function (event, ui) {
  //             var original = ui.originalPosition;
  //             ui.position = {
  //               left: (event.clientX - dragClick.x + original.left) / contentWrapper.scale,
  //               top: (event.clientY - dragClick.y + original.top) / contentWrapper.scale
  //             }
  //           }
  //         }); // 클론 드래그
  //       };
  //     }
  //   });
  // };


  // function drag_item_add(item) {
  //   $(item).draggable({
  //     appendTo: '#container',
  //     start: function (event, ui) {
  //       dragClick.x = event.clientX;
  //       dragClick.y = event.clientY;
  //       org_pos.y = $(event.currentTarget).css("top");
  //       org_pos.x = $(event.currentTarget).css("left");
  //       $(this).attr("data-starty", $(event.currentTarget).css("top"));
  //       $(this).attr("data-startx", $(event.currentTarget).css("left"));

  //       console.log(targetX, targetY, contentWrapper.scale)
  //       var x = targetX * contentWrapper.scale;
  //       var y = targetY * contentWrapper.scale;
  //       $('.target').css('width', x);
  //       $('.target').css('height', y);
  //     },
  //     stop: function (event, ui) {
  //       if (!$(ui.helper).hasClass("not-drag")) {
  //         $(ui.helper).css("top", org_pos.y);
  //         $(ui.helper).css("left", org_pos.x);
  //       }
  //     },
  //     drag: function (event, ui) {
  //       var original = ui.originalPosition;
  //       ui.position = {
  //         left: (event.clientX - dragClick.x + original.left) / contentWrapper.scale,
  //         top: (event.clientY - dragClick.y + original.top) / contentWrapper.scale
  //       }
  //     },
  //     helper: 'clone',
  //     scroll: false
  //   });
  // };
  // $(".drag").each(function () {
  //   drag_item_add(this);
  // });
  // $(".target").each(function () {
  //   drop_item_add(this);
  // });

}); // end