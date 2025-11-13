import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
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
