import { Post } from '../reducers/BookmarkReducer';
import { BookmarkActionTypes } from './action-types/BookmarkActionTypes';
import { Dispatch } from '../configure-store';

const addBookmark = (post: Post) => (dispatch: Dispatch) =>
  dispatch({
    type: BookmarkActionTypes.AddBookmark,
    payload: post,
  });

const removeBookmark = (id: number) => (dispatch: Dispatch) =>
  dispatch({
    type: BookmarkActionTypes.RemoveBookmark,
    payload: id,
  });

const displayBookmarks = () => (dispatch: Dispatch) =>
  dispatch({
    type: BookmarkActionTypes.DisplayBookmarks,
  });

const hideBookmarks = () => (dispatch: Dispatch) =>
  dispatch({
    type: BookmarkActionTypes.HideBookmarks,
  });

export { addBookmark, removeBookmark, displayBookmarks, hideBookmarks };
