import React from 'react';
import { shallow } from 'enzyme';
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Post, PostProps } from '../../components/Post';
import { Comments } from '../../components/Comments';

describe('<Post />', () => {
  const props: PostProps = {
    id: 5,
    title: 'title',
    body: 'body test',
  };

  it('renders no expanded', () => {
    const post = shallow(<Post {...props} />);
    const card = post.find(Card);
    expect(card.length).toBe(1);

    const cardHeader = card.find(CardHeader);
    expect(cardHeader.length).toBe(1);
    expect(cardHeader.prop('title')).toBe(props.title);

    const typography = card.find(CardContent).find(Typography);
    expect(typography.length).toBe(1);
    expect(typography.prop('variant')).toBe('body2');
    expect(typography.prop('color')).toBe('textSecondary');
    expect(typography.prop('component')).toBe('p');
    expect(typography.prop('children')).toBe(props.body);

    const cardActions = card.find(CardActions);
    expect(cardActions.length).toBe(1);
    expect(cardActions.prop('disableSpacing')).toBe(true);

    const iconButton = cardActions.find(IconButton);
    expect(iconButton.length).toBe(1);

    const expandMoreIcon = iconButton.find(ExpandMoreIcon);
    expect(expandMoreIcon.length).toBe(1);

    const comments = card.find(Comments);
    expect(comments.exists()).toBe(false);
  });

  it('renders comments', () => {
    const post = shallow(<Post {...props} />);
    const iconButton = post.find(IconButton);
    iconButton.simulate('click');
    
    const comments = post.find(Comments);
    expect(comments.exists()).toBe(true);
    expect(comments.prop('postId')).toBe(props.id);
  });
});
