import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../calculator';

it('calculating renders right', () => {
  const calculate = Renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculate).toMatchSnapshot();
});
