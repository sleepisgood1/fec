import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Product Detail test suite', () => {
  it('My Product Detail Test', () => {
      expect(true).toEqual(true);
  });
});