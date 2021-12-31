import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductDetail from '../client/src/components/ProductDetail/ProductDetail.jsx';

Enzyme.configure({ adapter: new Adapter() });

const testProductId = 63609;
const testProduct = {
  "id": 63609,
  "campus": "hr-sfo",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-12-21T17:19:40.556Z",
  "updated_at": "2021-12-21T17:19:40.556Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
};

describe('Product Detail test suite', () => {
  it('My Product Detail Test', () => {
      expect(true).toEqual(true);
  });
});

test('Should render ProductDetail', ()=> {
  const component = mount(<ProductDetail
    productId={testProductId}
    product={testProduct} />);
  expect(Array.isArray(component.state('styles'))).toEqual(true);
})