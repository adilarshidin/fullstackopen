import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BlogAdditionForm from '../components/BlogAdditionForm';


test('event handler props', async () => {
  const handleCreateBlogMock = vi.fn();

  render(<BlogAdditionForm handleCreateBlog={handleCreateBlogMock} />);

  const user = userEvent.setup();

  const title = screen.getByLabelText('Title:');
  const author = screen.getByLabelText('Author:');
  const url = screen.getByLabelText('URL:');

  await user.type(title, 'some title');
  await user.type(author, 'some author');
  await user.type(url, 'some url');

  const submitButton = screen.getByText('Submit');
  await user.click(submitButton);

  const newBlog = {
    title: 'some title',
    author: 'some author',
    url: 'some url'
  };

  expect(handleCreateBlogMock.mock.calls[0][0]).toEqual(newBlog);
});
