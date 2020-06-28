import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export interface CommentProps {
  name: string;
  email: string;
  body: string;
}

export const Comment = ({ name, email, body }: CommentProps) => (
  <ListItem alignItems="flex-start">
    <ListItemText primary={`${name} - ${email}`} secondary={body} />
  </ListItem>
);
