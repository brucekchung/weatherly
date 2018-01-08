import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import Welcome from '../lib/Welcome.js';

describe('Welcome Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });
  it('shold render the Search component', () => {
    expect(wrapper.find(Search)).toHaveLength(1)
  })

})