import React from 'react';
import { NewsFeed } from './components/NewsFeed';
import { Header } from './components/layout/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <NewsFeed />
    </div>
  );
};
