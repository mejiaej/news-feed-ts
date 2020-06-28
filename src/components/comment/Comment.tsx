import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export interface CommentProps {
  name: string;
  email: string;
  body: string;
}

export const Comment = ({ name, email, body }: CommentProps) => (
  <ListItem data-cy="commentContainer" alignItems="flex-start">
    <ListItemText
      data-cy="commentText"
      primary={`${name} - ${email}`}
      secondary={body}
    />
  </ListItem>
);
