import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import Header from '../lib/Header.js'
import SevenHour from '../lib/SevenHour.js'
import TenDay from '../lib/TenDay.js'
import Welcome from '../lib/Welcome.js'
import 'jest-localstorage-mock';

describe('App', () => {
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

  it('should only render the Welcome component on page load', () => {
    expect(wrapper.state('isWelcome')).toEqual(true)
    expect(wrapper.find('.cold').children().length).toEqual(1)
  })

  it('should render Search, Header, SevenHour, and TenDay after "setLocation" is called', () => {
    expect(wrapper.state('isWelcome')).toEqual(true)
    expect(wrapper.find(Welcome)).toHaveLength(1)

    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(App);

    inst.setLocation();

    expect(wrapper.state('isWelcome')).toEqual(false)
    expect(wrapper.find(Welcome)).toHaveLength(0)
    expect(wrapper.find(Search)).toHaveLength(1)
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(SevenHour)).toHaveLength(1)
    expect(wrapper.find(TenDay)).toHaveLength(1)

    //console.log(wrapper.debug())
  })
})