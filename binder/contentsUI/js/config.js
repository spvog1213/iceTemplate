
/* classname - iframe */
export const CLA_IFRAME = 'js-contentsFrame';

/* classname - menus */
export const CLA_MENU_TOP = 'js-topMenuBar';
export const CLA_MENU_BOTTOM = 'js-bottomManuBar';
export const CLA_ACTIVEHELPER = 'js-activeHelper';
export const CLA_LEARNINGTOOLS = 'js-learningTools';

/* classname - active */
export const CLA_ON = 'on';
export const CLA_OFF = 'off';
export const CLA_HIDDEN = 'hidden';
export const CLA_SHOWN = 'shown';
export const CLA_ACTIVE = 'active';
export const CLA_INACTIVE = 'inactive';

/* navigation */
export const CLA_NAVIGATION_CONTAINER = 'js-navigation';
export const CLA_NAVIGATION_LESSON = 'lesson';
export const CLA_NAVIGATION_CHAPTER = 'chapter';
export const CLA_NAVIGATION_CORNER = 'corner';
export const CLA_NAVIGATION_STEP = 'step';
export const CLA_NAVIGATION_TITLE = 'title';

/* ebook */
export const CLA_TEXTBOOK = 'js-textbook';
export const CLA_TEXTBOOK_PAGE = 'js-textbookPage';

/* paging */
export const CLA_PAGING = 'js-paging';
export const CLA_PAGING_PREV = 'js-prevBtn';
export const CLA_PAGING_NEXT = 'js-nextBtn';
export const CLA_PAGING_CURRENT = 'js-current';
export const CLA_PAGING_TOTAL = 'js-total';
export const ATTR_SCOPE = 'data-page-scope';

/* hide & show menu */
export const CLA_SHOWMENU_BTN = 'js-showMenuBtn';
export const CLA_HIDEMENU_BTN = 'js-hideMenuBtn';
export const CLA_HIDEMENU_ON = 'hideMenu';
export const CLA_SHOWMENU_ON = 'showMenu';

/* cursor */
export const CLA_CURSOR_BTN = 'js-cursorBtn';

/* home */
export const CLA_HOME_BTN = 'js-homeBtn';

/* index */
export const CLA_INDEX_BTN = 'js-indexBtn';
export const CLA_INDEX_POPUP = 'js-indexPopup';

/* floating menu - active helper */
export const CLA_FLOATING_LEARNINGTOOLS = 'js-learningTools';
export const ACTIVEHELPER_MENU_LIST = [
  {
    name: 'board',
    type: 'link',
    src: './binder/activeHelper/board.html'
  }, {
    name: 'timer',
    type: 'link',
    src: './binder/activeHelper/timer.html'
  }, {
    name: 'sticker',
    type: 'link',
    src: './binder/activeHelper/sticker.html'
  }, {
    name: 'group',
    type: 'link',
    src: './binder/activeHelper/group.html'
  }, {
    name: 'score',
    type: 'link',
    src: './binder/activeHelper/score.html'
  }, {
    name: 'penalty',
    type: 'link',
    src: './binder/activeHelper/penalty.html'
  }
];

/* floating menu - learning tools */
export const CLA_FLOATING_ACTIVEHELPER = 'js-activeHelper';
export const LEARNING_MENU_LIST = [
  {
    name: 'draw',
    type: 'draw'
  }, {
    name: 'memo',
    type: 'memo'
  }, {
    name: 'blackScreen',
    type: 'blackScreen'
  }, {
    name: 'attention',
    type: 'link',
    src: './binder/learningTools/attention.html'
  }
];

/* floating menu - special contents */
export const CLA_FLOATING_SPECIALCONTENTS = 'js-specialContents';
export const SPECIAL_CONTENTS_LIST = [
  {
    name: 'dictionary',
    type: 'link',
    src: './binder/specialContents/dictionary.html'
  }, {
    name: 'games',
    type: 'link',
    src: './binder/specialContents/games.html'
  }, {
    name: 'sings',
    type: 'link',
    src: './binder/specialContents/sings.html'
  }
];

/* options */
export const UI_OPTIONS = {}