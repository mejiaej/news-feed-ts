import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Post as PostComponent } from './Post';
import { getPosts } from '../fetch/Fetch';
import { StoreState } from '../redux';
import { Post } from '../redux/reducers/BookmarkReducer';

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
  const [posts, setPosts] = useState<Post[]>([]);
  const [done, setDone] = useState(false);

  const showBookmarks = useSelector(
    ({ Bookmark }: StoreState) => Bookmark.showBookmarks,
  );
  const bookmarkedPosts = useSelector(
    ({ Bookmark }: StoreState) => Bookmark.posts,
  );

  useEffect(() => {
    const fetchData = async () => {
      const postsResult = await getPosts();
      setPosts(postsResult);
      setDone(true);
    };

    // only fetch data if showBookmarks false
    if (showBookmarks) {
      setPosts(bookmarkedPosts);
    } else {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBookmarks]);

  if (!done) {
    return <LinearProgress />;
  }

  return (
    <div className={classes.container}>
      {posts.map(({ id, title, body }) => (
        <PostComponent key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};
