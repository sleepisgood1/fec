import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedItems from './../client/src/components/RelatedItems/RelatedItems.jsx'
import RelatedItem from './../client/src/components/RelatedItems/RelatedItem.jsx'
import {relatedProductList, relatedItemtest, testProduct} from './../client/RelatedItemstest.js'

Enzyme.configure({ adapter: new Adapter() });

describe('Related Items test suite', () => {
  it('My Related Items Test', () => {
      expect(true).toEqual(true);
  });
  test('Renders a single related item component', ()=> {
    const wrapper = mount(<RelatedItems relatedItems={relatedProductList} product={testProduct}/>);
    expect(wrapper).toContainMatchingElements(relatedProductList.length, 'img')
  })
  test('Renders the relatedItemInfo', ()=> {
    const wrapper = shallow(<RelatedItem product={testProduct} relatedItem={relatedItemtest}/>);
    expect(wrapper).toIncludeText('AccessoriesBlack Lenses & Black Frame Bright Future Sunglasses')
  })
});