import React from 'react';
import { shallow } from 'enzyme';
import { ListItem, ListItemText } from '@material-ui/core';
import { Comment, CommentProps } from '../../components/Comment';

describe('<Comment />', () => {
  it('renders successfully', () => {
    const props: CommentProps = {
      name: 'name1',
      email: 'test@gmail.com',
      body: 'body test',
    };

    const comment = shallow(<Comment {...props} />);
    const listItem = comment.find(ListItem);
    expect(listItem.length).toBe(1);
    expect(listItem.prop('alignItems')).toBe('flex-start');

    const listItemText = listItem.find(ListItemText);
    expect(listItemText.length).toBe(1);
    expect(listItemText.prop('primary')).toEqual(
      `${props.name} - ${props.email}`,
    );
    expect(listItemText.prop('secondary')).toEqual(props.body);
  });
});
