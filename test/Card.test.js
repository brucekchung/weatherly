import React from 'react'
import { mount, shallow } from 'enzyme'
import Card from '../lib/Card.js'

describe('Card', () => {
  let wrapper;
  const props = {
                  type: 'sevenHour',
                  time:'7',
                  image: 'asdf',
                  temp: '50'
                };

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a class name', () => {
    expect(wrapper.find('.sevenHour')).toBeDefined()
  })

  it('should have three nodes', () => {
    expect(wrapper.find('.sevenHour').children().length).toEqual(3)
  })

  it('should receive data from the props object', () => {
    wrapper = mount(<Card {...props} />)
    expect(wrapper.props().type).toBeDefined();
    expect(wrapper.props().time).toBeDefined();
    expect(wrapper.props().image).toBeDefined();
    expect(wrapper.props().temp).toBeDefined();
  })

  it('should render the props it is passed', () => {
    expect(wrapper.find('h3').length).toEqual(2)
    expect(wrapper.find('h3').first().text()).toEqual('7')
    expect(wrapper.find('h3').at(1).text()).toEqual('50')
  })
})
