import React from 'react';
import { NewsFeed } from './components/post/NewsFeed';
import { Header } from './components/layout/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <NewsFeed />
    </div>
  );
};
