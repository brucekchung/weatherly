import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import Welcome from '../lib/Welcome.js';

describe('Welcome Page', () => {
  let wrapper;
  const props = {
    
  }
  beforeEach(() => {
    wrapper = shallow(<Welcome {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})