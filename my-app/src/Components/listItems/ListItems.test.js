import React from 'react'
import {findByTestAtrr, checkProps} from './../../Utils/index'
import ListItems from './ListItems'
import { shallow } from 'enzyme'

describe('List Items component',()=>{
    describe('Checking proptypes',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps ={
                title:'Test title',
                desc: 'Test desc'
            }
            const propsError = checkProps(ListItems,expectedProps)
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                title:'Test title',
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItems {...props}/>)
        })
        it('Should render a list',()=>{
            const button = findByTestAtrr(wrapper,'listItems');
            expect(button.length).toBe(1)
        })
        it('Should render a title',()=>{
            const button = findByTestAtrr(wrapper,'list-item-title');
            expect(button.length).toBe(1)
        })
        it('Should render a description',()=>{
            const button = findByTestAtrr(wrapper,'list-item-desc');
            expect(button.length).toBe(1)
        })
    })

    describe('Doesnt render when no props are received',()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItems {...props}/>)
        })
        it('Should render a list',()=>{
            const button = findByTestAtrr(wrapper,'listItems');
            expect(button.length).toBe(0)
        })
    })
})