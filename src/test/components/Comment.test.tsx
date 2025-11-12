import React from 'react';
import { render, screen } from '@testing-library/react';
import { Comment, CommentProps } from '../../components/comment/Comment';

describe('<Comment />', () => {
  it('renders successfully', () => {
    const props: CommentProps = {
      name: 'name1',
      email: 'test@gmail.com',
      body: 'body test',
    };

    render(<Comment {...props} />);
    
    // Verify that the component renders (using data-testid from the component)
    const listItem = screen.getByTestId('commentContainer');
    expect(listItem).toBeInTheDocument();
    
    // Verify that the primary text contains the name and email
    expect(screen.getByText(`${props.name} - ${props.email}`)).toBeInTheDocument();
    
    // Verify that the secondary text (body) is present
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });
});
