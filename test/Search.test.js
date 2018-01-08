import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import Header from '../lib/Header.js'
import SevenHour from '../lib/SevenHour.js'
import TenDay from '../lib/TenDay.js'
import Welcome from '../lib/Welcome.js'
import CompleteMe from '../node_modules/complete-me/lib/Trie.js';
import 'jest-localstorage-mock';

describe.only('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a default state', () => {
    expect(wrapper.state('input')).toEqual('')
    expect(wrapper.state('suggestions')).toEqual([])
  })

  it('should have a handleChange and handleClick method', () => {
    expect(typeof wrapper.instance().handleChange).toEqual('function');
    expect(typeof wrapper.instance().handleClick).toEqual('function');
  })

  it('should render a button, input field, and datalist', () => {
    expect(wrapper.find('.srch-input')).toHaveLength(1)
    expect(wrapper.find('.srch-btn')).toHaveLength(1)
    expect(wrapper.find('#comp-me')).toHaveLength(1)
  })

  it('should record changes to input field state.input', () => {
    expect(wrapper.state().input).toEqual('');
    wrapper.find('.srch-input').simulate('change', {target: {value: 'Denver, CO'}});

    expect(wrapper.state().input).toEqual('Denver, CO');
  });

  it('should add suggestions to state when inputs are entered', () => {
    expect(wrapper.state('suggestions')).toEqual([])
    wrapper.find('.srch-input').simulate('change', {target: {value: 'Denver, CO'}});

    expect(wrapper.state('suggestions')).toEqual([ 'denver, co' ])
  })

  it('should add multiple suggestions to state based on input', () => {
    expect(wrapper.state('suggestions')).toEqual([])
    wrapper.find('.srch-input').simulate('change', {target: {value: 'red'}});

    expect(wrapper.state('suggestions').length).toEqual(5)
  })

  it('should not add suggestions to state for inputs less than 3', () => {
    expect(wrapper.state('suggestions')).toEqual([])
    wrapper.find('.srch-input').simulate('change', {target: {value: 're'}});

    expect(wrapper.state('suggestions').length).toEqual(0)
  })
})