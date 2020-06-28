import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  Bookmarks as BookmarksIcon,
  Cancel as CancelIcon,
} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../redux';
import {
  hideBookmarks,
  displayBookmarks,
} from '../../redux/actions/BookmarkActions';

export const BookmarksButton = () => {
  const dispatch = useDispatch();
  const showBookmarks = useSelector(
    ({ Bookmark }: StoreState) => Bookmark.showBookmarks,
  );

  const handleCancel = () => {
    dispatch(hideBookmarks());
  };

  const handleBookmarks = () => {
    dispatch(displayBookmarks());
  };

  if (showBookmarks) {
    return (
      <IconButton onClick={handleCancel}>
        <CancelIcon />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={handleBookmarks}>
      <BookmarksIcon />
    </IconButton>
  );
};
