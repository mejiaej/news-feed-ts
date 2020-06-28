import React, { useState } from 'react';
import {
  makeStyles,
  Theme,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  ExpandMore as ExpandMoreIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
} from '@material-ui/icons';
import { Comments } from './Comments';
import { addBookmark, removeBookmark } from '../redux/actions/BookmarkActions';
import { StoreState } from '../redux';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface Expanded {
  expanded: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 500,
    marginTop: theme.spacing(5),
  },
  expand: ({ expanded }: Expanded) => ({
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }),
}));

export const Post = ({ id, title, body }: PostProps) => {
  const [expanded, setExpanded] = useState(false);
  const marked = useSelector(({ Bookmark }: StoreState) =>
    Bookmark.posts.find((post) => post.id === id),
  );
  const classes = useStyles({ expanded });
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mark = () => {
    dispatch(addBookmark({ id, title, body }));
  };

  const unmark = () => {
    dispatch(removeBookmark(id));
  };

  let commentsComponent;
  if (expanded) {
    commentsComponent = <Comments postId={id} />;
  }

  const bookmarkComponent = (
    <IconButton onClick={marked ? unmark : mark}>
      {marked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );

  return (
    <Card data-cy="postContainer" className={classes.card}>
      <CardHeader title={title} action={bookmarkComponent} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          data-cy="postExpand"
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {commentsComponent}
    </Card>
  );
};
