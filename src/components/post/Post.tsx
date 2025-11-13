import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Comments } from '../comment/Comments';
import { BookmarkButton } from './BookmarkButton';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const Post = ({ id, title, body }: PostProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let commentsComponent;
  if (expanded) {
    commentsComponent = <Comments postId={id} />;
  }

  return (
    <Card 
      data-cy="postContainer" 
      data-testid="postContainer" 
      sx={{ 
        maxWidth: 500, 
        marginTop: 5 
      }}
    >
      <CardHeader
        title={title}
        action={<BookmarkButton id={id} title={title} body={body} />}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          data-cy="postExpand"
          data-testid="postExpand"
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            marginLeft: 'auto',
            transition: (theme) => theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          }}
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
