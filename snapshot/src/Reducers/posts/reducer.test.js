import { types } from '../../Actions/types'
import postReducer from './reducer'

describe('Post reducer',()=>{

    it('Should return default state',()=>{
        const newState = postReducer(undefined,{})
        expect(newState).toEqual([])
    })

    it('Should return new state if receiving type',()=>{
        const posts=[{ title:'Test 1'},{title:'Test 2'},{title:'Test3'}]
        const newState = postReducer(undefined,{
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})