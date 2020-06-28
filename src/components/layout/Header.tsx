import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { BookmarksButton } from './BookmarksButton';

export const Header = () => {

  return (
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          News feed
        </Typography>
        <BookmarksButton />
      </CardContent>
    </Card>
  );
};
