import React from 'react'
import { mount, shallow } from 'enzyme'
import Card from '../lib/Card.js'

describe('Card', () => {
  let wrapper;
  const props = {
                  type: 'sevenHour',
                  time: 7,
                  image: 'asdf',
                  temp: 50
                };

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have three nodes', () => {
    //console.log(wrapper.debug())
    expect(wrapper.find('.sevenHour').children().length).toEqual(3)
  })

  it.skip('should have a temperature of 90', () => {
    props.temp = 90
    wrapper = shallow(<Card {...props} />)

    expect(wrapper)
  })

})