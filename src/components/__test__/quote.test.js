import React from 'react';
import Renderer from 'react-test-renderer';
import Quote from '../Quote';

it('claculating renders right', () => {
  const quote = Renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
