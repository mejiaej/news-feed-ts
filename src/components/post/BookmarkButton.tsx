import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import {
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
} from '@material-ui/icons';
import { StoreState } from '../../redux';
import {
  addBookmark,
  removeBookmark,
} from '../../redux/actions/BookmarkActions';

interface BookmarkButtonProps {
  id: number;
  title: string;
  body: string;
}

export const BookmarkButton = ({ id, title, body }: BookmarkButtonProps) => {
  const marked = useSelector(({ Bookmark }: StoreState) =>
    Bookmark.posts.find((post) => post.id === id),
  );
  const dispatch = useDispatch();

  const handleMark = () => {
    dispatch(addBookmark({ id, title, body }));
  };

  const handleUnmark = () => {
    dispatch(removeBookmark(id));
  };

  if (marked) {
    return (
      <IconButton onClick={handleUnmark}>
        <BookmarkIcon />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={handleMark}>
      <BookmarkBorderIcon />
    </IconButton>
  );
};
