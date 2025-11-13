import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Post, PostProps } from '../../components/post/Post';

// Mock the Comments component to avoid API calls
jest.mock('../../components/comment/Comments', () => ({
  Comments: ({ postId }: { postId: number }) => (
    <div data-testid="comments-component" data-postid={postId}>
      Comments for post {postId}
    </div>
  ),
}));

const mockStore = configureStore([]);

describe('<Post />', () => {
  const props: PostProps = {
    id: 5,
    title: 'title',
    body: 'body test',
  };

  let store: any;

  beforeEach(() => {
    store = mockStore({
      Bookmark: {
        showBookmarks: false,
        counter: 0,
        posts: [],
      },
    });
  });

  it('renders no expanded', () => {
    render(
      <Provider store={store}>
        <Post {...props} />
      </Provider>
    );
    
    // Verify that the post container is rendered
    const postContainer = screen.getByTestId('postContainer');
    expect(postContainer).toBeInTheDocument();

    // Verify that the title is present
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Verify that the body is present as Typography
    expect(screen.getByText(props.body)).toBeInTheDocument();

    // Verify that the expand button exists
    const expandButton = screen.getByTestId('postExpand');
    expect(expandButton).toBeInTheDocument();
    expect(expandButton).toHaveAttribute('aria-expanded', 'false');

    // Verify that comments are NOT visible initially
    expect(screen.queryByTestId('comments-component')).not.toBeInTheDocument();
  });

  it('renders comments', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Post {...props} />
      </Provider>
    );
    
    // Click the expand button
    const expandButton = screen.getByTestId('postExpand');
    await user.click(expandButton);
    
    // Verify that comments are now visible
    const commentsComponent = screen.getByTestId('comments-component');
    expect(commentsComponent).toBeInTheDocument();
    expect(commentsComponent).toHaveAttribute('data-postid', props.id.toString());
    
    // Verify that the button is expanded
    expect(expandButton).toHaveAttribute('aria-expanded', 'true');
  });
});
