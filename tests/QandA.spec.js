/**
 * @jest-environment enzyme
 */

 import React from 'react';
 import Enzyme, { mount, shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 Enzyme.configure({ adapter: new Adapter() });

describe('Q&A test suite', () => {
  it('My Q&A Test', () => {
      expect(true).toEqual(true);
  });
});