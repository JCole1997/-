import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  articleList: [],
  boardList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    articleList: fromJS(action.articleList),
    boardList: fromJS(action.boardList),
  });
}

const getArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(fromJS(action.list)),
    articlePage: fromJS(action.nextPage),
  });
};

const toggleScrollTop = (state, action) => {
  return state.set("showScroll", fromJS(action.showScroll));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.GET_ARTICLE_LIST:
      return getArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action);
    default:
      return state;
  }
}