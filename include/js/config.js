
/* classname - scale */
export const CLA_SCALE = 'js-scale';

/* classname - active */
export const CLA_ON = 'on';
export const CLA_OFF = 'off';
export const CLA_HIDE = 'hide';
export const CLA_SHOW = 'show';
export const CLA_COMPLETE = 'complete';
export const CLA_SELECTED = 'selected';
export const CLA_ACTIVE = 'active';
export const CLA_INACTIVE = 'inactive';
export const CLA_ANSWER = 'isAnswer'; //정답에 붙이는 class
/* player */
export const CLA_PLAYING = 'isPlaying';
export const CLA_PAUSED = 'isPaused';
/* dragdrop */
export const CLA_DRAGGING = 'isDragging';
export const CLA_DROPPED = 'dropped';
export const CLA_DRAGGED = 'dragged';
export const CLA_FREEDRAG = 'freeDrag'; //위치 옮기는게 자유로운 quizItem에 붙는 class
export const CLA_NONEVENT = 'nonEvent'; //드래그 중일 때 isDragging 와 함께 붙는 class
/* drawing */
export const CLA_DRAWED = 'drawed';

/* sound */
export const SND_CLICK = 'click';
export const SND_BUTTON_1 = 'button';
export const SND_BUTTON_2 = 'button2';
export const SND_CORRECT = 'correct';
export const SND_INCORRECT = 'incorrect';
export const SND_SUCCESS = 'success';
export const SND_FAIL = 'fail';
export const SND_MUTE = 'mute';

/* options - slider */
export const OPT_TITLE = 'title';
export const OPT_MOTION = 'motion';
export const OPT_MOTION_SIDE = 'moveSideMotion';
export const OPT_VERTICAL = 'vertical';
/* options - popup */
export const OPT_NOCLOSE = 'noClose';
/* options - quiz */
export const OPT_NORESET = 'noReset'; // 초기화 안함
export const OPT_EXAMPLE = 'example'; // 예시답
export const OPT_NOALERT = 'noAlert'; // 퀴즈 알림 사용 안함
export const OPT_NOSOLVE = 'noSolve'; // 사용자 답 체크 안함
export const OPT_ALLSOLVE = 'allSolve'; // 사용자 답 전체 입력
export const OPT_SHOWBTN_ANS = 'showAnsButton'; // 정답 확인 버튼 처음부터 보이기
export const OPT_SHOWBTN_REDO = 'showRedoButton'; // 다시하기 버튼만 보이기
export const OPT_RESET_ALLITEM = 'resetAllItem'; // 다시하기 시 사용자 답 전체 초기화
export const OPT_RESET_EACHITEM = 'resetEachItem'; // 다시하기 시 사용자 답 중 오답만 초기화
export const OPT_NOSOUND = 'noSound'; // 정오답 사운드 없음
export const OPT_SAVE_USERANSWER = 'saveUserAnswer'; // 사용자 답 초기화 안함
export const OPT_AUTOBUTTON = 'autoChangeButton'; // 전체 정답을 완료 한 경우 자동으로 다시하기 버튼으로 변경
export const OPT_CHOICE_MULTI = 'multiChoice'; // 다중선택
export const OPT_NOANSWER = 'noAnswer'; 
export const OPT_MULTIDROP = 'multiDrop'; // 한 dropItem에 여러개의 dragItem 드랍 가능
export const OPT_FREEDRAG = 'freeDrag'; // 정답 상관없이 무제한 드래그
export const OPT_COPYDRAG = 'copyDrag'; // 정답인 경우 무제한 드래그
export const OPT_ITEM_BTN = 'itemButton'; // 개별정답버튼 생성

/* event */
export const EVT_CLICK = 'click';

/* callback name */
export const CALLBACK_CORRECT = 'correct';
export const CALLBACK_INCORRECT = 'incorrect';
export const CALLBACK_FINISH = 'finish';
export const CALLBACK_REDO = 'redo';
export const CALLBACK_RESET = 'reset';
export const CALLBACK_SELECT = 'select';
export const CALLBACK_OPEN = 'toggleOpen';
export const CALLBACK_CLOSE = 'toggleClose';
export const CALLBACK_DRAG_CORRECT = 'dragCorrect';
export const CALLBACK_DRAG_INCORRECT = 'dragIncorrect';

/* drawing */
export const DRAWING_OPTIONS = {
  line: [
    {name: 'straight', value: 'straight'},
    {name: 'curve', value: 'curve'}
  ],
  brush: [
    {name: 'pen', value: 'pen'}, 
    {name: 'highlighter', value: 'highlighter'}, 
    {name: 'eraser', value: 'eraser'}, 
    {name: 'removeline', value: 'removeline'}, 
    {name: 'remove', value: 'remove'}
  ],
  color: [
    {name: 'red', value: '#ea0000'},
    {name: 'orange', value: '#f47025'},
    {name: 'yellow', value: '#ffd400'},
    {name: 'green', value: '#00a651'},
    {name: 'sky', value: '#018dc2'},
    {name: 'blue', value: '#0018fb'},
    {name: 'deepPurple', value: '#4e01c2'},
    {name: 'purple', value: '#914afc'},
    {name: 'pink', value: '#f364e1'},
    {name: 'black', value: '#000000'},
    {name: 'white', value: '#ffffff'},
  ],
  stroke: [
    {name: `size_2`, value: 2}, 
    {name: `size_5`, value: 5}, 
    {name: `size_10`, value: 10}, 
    {name: `size_15`, value: 15}, 
    {name: `size_20`, value: 20}
  ]
}

/* timer */
export const CLA_TIMER_PROGRESS = 'timerProgress'; // 시간이 소요될수록 줄어드는 bar
export const CLA_TIMER_CLOCK = 'timerClock'; // 남은 시간 표시

export const ATTR_TIMER_TYPE = 'data-timer-type'; // 시계 방향 - horizon(가로) || vertical(세로)
export const ATTR_TIMER_TIME = 'data-timer-time'; // 시간 (초 기준)