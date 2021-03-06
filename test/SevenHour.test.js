import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';
import SevenHour from '../lib/SevenHour.js';
import mock from '../mock/mock.js';

describe('Seven Hour Forecast Card', () => {
  let wrapper;
  const props = {
    forecast: mock
  }

  beforeEach(() => {
    wrapper = shallow(<SevenHour {...props}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
  
  it('should return 7 cards', () => {
    wrapper = mount(<SevenHour {...props} />);

    expect(wrapper.children().length).toEqual(7);
  })
})
