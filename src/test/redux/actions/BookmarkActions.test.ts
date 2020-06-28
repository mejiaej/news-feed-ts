import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import { BookmarkActionTypes } from '../../../redux/actions/action-types/BookmarkActionTypes';
import { FIRST_POST } from '../../fixtures/Bookmark';
import {
  addBookmark,
  removeBookmark,
  displayBookmarks,
  hideBookmarks,
} from '../../../redux/actions/BookmarkActions';

const middlewares = [thunk, ReduxPromise];
const mockStore = configureMockStore(middlewares);

describe('BookmarkActions', () => {
  it('addBookmark', () => {
    const store = mockStore(null);
    const expectedAction = {
      type: BookmarkActionTypes.AddBookmark,
      payload: FIRST_POST,
    };

    // @ts-ignore
    store.dispatch(addBookmark(FIRST_POST));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('addBookmark', () => {
    const store = mockStore(null);
    const expectedAction = {
      type: BookmarkActionTypes.RemoveBookmark,
      payload: FIRST_POST.id,
    };

    // @ts-ignore
    store.dispatch(removeBookmark(FIRST_POST.id));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('displayBookmarks', () => {
    const store = mockStore(null);
    const expectedAction = {
      type: BookmarkActionTypes.DisplayBookmarks,
    };

    // @ts-ignore
    store.dispatch(displayBookmarks());
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('hideBookmarks', () => {
    const store = mockStore(null);
    const expectedAction = {
      type: BookmarkActionTypes.HideBookmarks,
    };

    // @ts-ignore
    store.dispatch(hideBookmarks());
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
