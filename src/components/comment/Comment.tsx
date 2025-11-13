import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

export interface CommentProps {
  name: string;
  email: string;
  body: string;
}

export const Comment = ({ name, email, body }: CommentProps) => (
  <ListItem data-cy="commentContainer" data-testid="commentContainer" alignItems="flex-start">
    <ListItemText
      data-cy="commentText"
      data-testid="commentText"
      primary={`${name} - ${email}`}
      secondary={body}
    />
  </ListItem>
);
