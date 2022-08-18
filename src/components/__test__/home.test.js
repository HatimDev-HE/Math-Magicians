import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../Home';

it('claculating renders right', () => {
  const homeTree = Renderer
    .create(<Home />)
    .toJSON();
  expect(homeTree).toMatchSnapshot();
});
