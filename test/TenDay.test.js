import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';
import TenDay from '../lib/TenDay.js';
import mock from '../mock/mock.js';

describe('Ten Day Forecast Cards', () => {
  let wrapper;
  const props = {
    forecast: mock
  }

  beforeEach(() => {
    wrapper = shallow(<TenDay {...props}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
  
  it('should return 7 cards', () => {
    wrapper = mount(<TenDay {...props} />);

    expect(wrapper.children().length).toEqual(10);
  })
})
