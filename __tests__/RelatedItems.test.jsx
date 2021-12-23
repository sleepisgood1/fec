import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Related Items test suite', () => {
  it('My Related Items Test', () => {
      expect(true).toEqual(true);
  });
});