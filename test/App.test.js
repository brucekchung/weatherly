import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})