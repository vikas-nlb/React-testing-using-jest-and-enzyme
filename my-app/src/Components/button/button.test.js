import React from 'react'
import {findByTestAtrr, checkProps} from './../../Utils/index'
import Button from './Button'
import { shallow } from 'enzyme'

describe('Button component',()=>{
    describe('Checking proptypes',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps ={
                title:'Test',
                emitFunc: ()=>{

                }
            }
            const propsError = checkProps(Button,expectedProps)
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders',()=>{
        let wrapper;
        let mockFunc
        beforeEach(()=>{
            mockFunc =jest.fn()
            const props ={
                title:'Test',
                emitFunc: mockFunc
            }
            wrapper = shallow(<Button {...props}/>)
        })
        it('Should render a button',()=>{
            const button = findByTestAtrr(wrapper,'buttonComponent');
            expect(button.length).toBe(1)
        })
        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
        
    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    });
    })
})