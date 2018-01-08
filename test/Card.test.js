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
    expect(wrapper.find('.sevenHour').children().length).toEqual(3)
  })

  it.skip('should be able to receive props', () => {
    props.temp = 90
    wrapper = shallow(<Card {...props} />)

    console.log(wrapper.debug())
    //expect(wrapper.find('.sevenHour').children())
  })

})