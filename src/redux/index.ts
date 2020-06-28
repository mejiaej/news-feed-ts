import { combineReducers } from 'redux';
import { bookmarkReducer, BookmarkState } from './reducers/BookmarkReducer';

export interface StoreState {
  Bookmark: BookmarkState;
}

const rootReducer = combineReducers<StoreState>({
  Bookmark: bookmarkReducer,
});

export { rootReducer };
