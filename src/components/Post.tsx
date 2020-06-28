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
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Comments } from './Comments';

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
  const classes = useStyles({ expanded });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let commentsComponent;
  if (expanded) {
    commentsComponent = <Comments postId={id} />;
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
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
