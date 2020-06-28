import {
  bookmarkReducer,
  BOOKMARK_INITIAL_STATE,
} from '../../../redux/reducers/BookmarkReducer';
import { BookmarkActionTypes } from '../../../redux/actions/action-types/BookmarkActionTypes';
import { FIRST_POST, SECOND_POST } from '../../fixtures/Bookmark';

describe('BookmarkReducer', () => {
  it('return initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual(BOOKMARK_INITIAL_STATE);
  });

  it('Handles adding and removing bookmark', () => {
    let state = bookmarkReducer(undefined, {
      type: BookmarkActionTypes.AddBookmark,
      payload: FIRST_POST,
    });
    expect(state.counter).toBe(1);
    expect(state.posts.length).toBe(1);
    expect(state.posts[0]).toEqual(FIRST_POST);

    state = bookmarkReducer(state, {
      type: BookmarkActionTypes.AddBookmark,
      payload: SECOND_POST,
    });
    expect(state.counter).toBe(2);
    expect(state.posts.length).toBe(2);
    expect(state.posts[1]).toEqual(SECOND_POST);

    state = bookmarkReducer(state, {
      type: BookmarkActionTypes.RemoveBookmark,
      payload: SECOND_POST.id,
    });

    expect(state.counter).toBe(1);
    expect(state.posts.length).toBe(1);
    expect(state.posts[0]).toEqual(FIRST_POST);
  });

  it('handles displaying and hiding bookmarks', () => {
    // first add two posts to bookmarks
    let state = bookmarkReducer(undefined, {
      type: BookmarkActionTypes.AddBookmark,
      payload: FIRST_POST,
    });
    state = bookmarkReducer(state, {
      type: BookmarkActionTypes.AddBookmark,
      payload: SECOND_POST,
    });

    // show 2 bookmarks
    state = bookmarkReducer(state, {
      type: BookmarkActionTypes.DisplayBookmarks,
    });

    expect(state.showBookmarks).toBe(true);
    expect(state.counter).toBe(2);
    expect(state.posts.length).toBe(2);

    // hide bookmarks should return initial state
    state = bookmarkReducer(state, {
      type: BookmarkActionTypes.HideBookmarks,
    });
    expect(state).toEqual(BOOKMARK_INITIAL_STATE);
  });
});
