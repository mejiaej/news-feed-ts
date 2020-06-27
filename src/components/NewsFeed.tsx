import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { Post } from './Post';
import { getPosts } from '../fetch/Fetch';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },
}));

export const NewsFeed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const postsResult = await getPosts();
      setPosts(postsResult);
      setDone(true);
    };
    fetchData();
  }, []);

  if (!done) {
    return <LinearProgress />;
  }

  return (
    <div className={classes.container}>
      {posts.map(({ id, title, body }) => (
        <Post key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};
