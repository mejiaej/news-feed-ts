import { produce, Draft } from 'immer';
import { BookmarkActionTypes } from '../actions/action-types/BookmarkActionTypes';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface BookmarkState {
  showBookmarks: boolean;
  counter: number;
  posts: Post[];
}

const INITIAL_STATE: BookmarkState = {
  showBookmarks: false,
  counter: 0,
  posts: [],
};

export const bookmarkReducer = produce(
  (draft: Draft<BookmarkState>, action) => {
    switch (action.type) {
      case BookmarkActionTypes.AddBookmark:
        draft.counter += 1;
        draft.posts.push(action.payload);
        break;
      case BookmarkActionTypes.RemoveBookmark:
        draft.counter -= 1;
        draft.posts = draft.posts.filter(({ id }) => id !== action.payload);
        break;
      case BookmarkActionTypes.DisplayBookmarks:
        draft.showBookmarks = true;
        break;
      case BookmarkActionTypes.HideBookmarks:
        draft.counter = INITIAL_STATE.counter;
        draft.posts = INITIAL_STATE.posts;
        draft.showBookmarks = INITIAL_STATE.showBookmarks;
    }
  },
  INITIAL_STATE,
);
