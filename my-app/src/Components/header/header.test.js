import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import {findByTestAtrr} from '../../Utils/index'


const setUp = (props) =>{
const component = shallow(<Header />);
return component
}


describe("Header testing ",()=>{
    let component;
    beforeEach(()=>{
        component = setUp()
    })
    it('Component rendered',()=>{
        const wrapper = findByTestAtrr(component,'header');
        expect(wrapper.length).toBe(1)
    })

    it('Header text is rendered',()=>{
        const wrapper = findByTestAtrr(component,'writeup')
        expect(wrapper.length).toBe(1)
    })
})