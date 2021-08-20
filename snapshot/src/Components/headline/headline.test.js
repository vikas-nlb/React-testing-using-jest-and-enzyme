import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import {findByTestAtrr, checkProps} from '../../Utils/index'
import { beforeEach } from '@jest/globals'

const setUp = (props) =>{
    const component = shallow(<Headline {...props} />);
    return component
    }

describe("Headline tests",()=>{

    describe('Checking proptypes',()=>{
        it('Should not throw any error or warning',()=>{

            const expectedProps = {
                headline: 'Test headline',
                desc: 'Test desc',
                tempArr: [{
                    name: 'Test name',
                    age: 25,
                    working: true
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe("With props",()=>{
        let component;
        beforeEach(()=>{
            const props={
                headline:'Test headline',
                desc:'Test desc'
            }
            component=setUp(props)
        })
        it('component rendering properly',()=>{
            const wrapper = findByTestAtrr(component,'headlineBox')
            expect(wrapper.length).toBe(1)
        })
        it('headline is rendering properly',()=>{
            const wrapper = findByTestAtrr(component,'headline');
            expect(wrapper.length).toBe(1)
        })
        it('description is rendering properly',()=>{
            const wrapper = findByTestAtrr(component,'desc');
            expect(wrapper.length).toBe(1)
        })
    })
    describe('Without props',()=>{
        let component;
        beforeEach(()=>{
            component=setUp();
        })
        it('healine is not rendered',()=>{
            const wrapper = findByTestAtrr(component,'headlineBox')
            expect(wrapper.length).toBe(0)
        })
    })
})