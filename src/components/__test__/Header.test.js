import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../Header';

it('Header render correctly', () => {
  render(
    <Router>
      const tree = Renderer
      .create(
      <Header />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    </Router>,
  );
});
