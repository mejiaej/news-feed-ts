import React, { useEffect, useState, Fragment } from 'react';
import {
  Collapse,
  CardContent,
  List,
  Divider,
  LinearProgress,
} from '@material-ui/core';
import { getComments } from '../../fetch/Fetch';
import { Comment } from './Comment';

interface CommetsProps {
  postId: number;
}

export const Comments = ({ postId }: CommetsProps) => {
  const [comments, setComments] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const commentsResult = await getComments(postId);
      setComments(commentsResult);
      setDone(true);
    };

    fetchData();
  }, [postId]);

  if (!done) return <LinearProgress />;

  return (
    <Collapse data-cy="commentsContainer" in={true} timeout="auto" unmountOnExit>
      <CardContent>
        <List>
          {comments.map(({ id, name, email, body }) => (
            <Fragment key={id}>
              <Comment name={name} email={email} body={body} />
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      </CardContent>
    </Collapse>
  );
};
