import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import Welcome from '../lib/Welcome.js'
import 'jest-localstorage-mock';

describe.only('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have the correct initial state', () => {
    expect(wrapper.state('forecast')).toEqual(null)
    expect(wrapper.state('city')).toEqual(undefined)
    expect(wrapper.state('state')).toEqual(undefined)
    expect(wrapper.state('isWelcome')).toEqual(true)
  })

  it('should only render the Welcome component when state.isWelcome = true', () => {
    expect(wrapper.state('isWelcome')).toEqual(true)
    expect(wrapper.find('.cold').children().length).toEqual(1)

    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(App);
    inst.setLocation();
    expect(wrapper.state('isWelcome')).toEqual(false);
    expect(wrapper.find(Search)).toHaveLength(1)
    expect(wrapper.find(Welcome)).toHaveLength(0)

    //console.log(wrapper.debug())
  })


})