import { render, screen } from '@testing-library/react';

import Note from './Note';


test('renders content', async () => {
  const notes = {};
  const noteCurrent = {
    id: '123',
    content: 'Component testing is done with react-testing-library',
    important: true
  };

  render(<Note notes={notes} noteCurrent={noteCurrent} />);

  const element = screen.getByText('Component testing is done with react-testing-library');
  expect(element).toBeDefined();
});
