import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Ratings and Reviews test suite', () => {
  it('My Ratings and Reviews Test', () => {
      expect(true).toEqual(true);
  });
});