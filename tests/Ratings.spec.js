/**
 * @jest-environment enzyme
 */

 import React from 'react';
 import Enzyme, { mount, shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 Enzyme.configure({ adapter: new Adapter() });


describe('Ratings and Reviews test suite', () => {
  it('My Ratings and Reviews Test', () => {
      expect(true).toEqual(true);
  });
});