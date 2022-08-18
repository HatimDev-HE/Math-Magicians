import React from 'react';
import Renderer from 'react-test-renderer';
import App from './App';

it('App renders right', () => {
  const app = Renderer
    .create(<App />)
    .toJSON();
  expect(app).toMatchSnapshot();
});
