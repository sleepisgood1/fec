import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductDetail from '../client/src/components/ProductDetail/ProductDetail.jsx';
import StyleSelector from '../client/src/components/ProductDetail/StyleSelector.jsx';

Enzyme.configure({ adapter: new Adapter() });

const testProductId = 1;
const product = {};

describe('Product Detail test suite', () => {
  it('My Product Detail Test', () => {
      expect(true).toEqual(true);
  });
});

test('Renders an empty component', ()=> {
  const wrapper = mount(<ProductDetail
    productId={testProductId}
    product={product} />);
  expect(wrapper).toContainMatchingElements(0,'div')
})