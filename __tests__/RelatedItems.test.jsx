import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedItems from '../client/src/components/RelatedItems.jsx'
import RelatedItem from '../client/src/components/RelatedItem.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('Related Items test suite', () => {
  it('My Related Items Test', () => {
      expect(true).toEqual(true);
  });
  it('Renders a single related item component', ()=>{
    const wrapper = mount(<RelatedItems relatedItems={relatedProductList}/>);
    expect(wrapper).toContainMatchingElements(1, 'ul')
  })
  it('Renders the relatedItemInfo', ()=>{
    const sampleItem = {"style_id": 391647,
    "name": "Desert Brown & Tan",
    "original_price": "140.00",
    "sale_price": null,
    "default?": false,}
    const wrapper = shallow(<RelatedItem relatedItem={sampleItem}/>);
    expect(wrapper).toIncludeText('Desert Brown & Tan')
  })
});