import moxios from 'moxios'
import { testStore } from '../Utils'
import { fetchPosts} from '../Actions'

describe('fetchPosts actions',()=>{
    beforeEach(()=>{
        moxios.install()
    })
    afterEach(()=>{
        moxios.uninstall()
    })
    
    test('Store is updated correctly',()=>{

        const expectedState =[{
            title: 'Example 1',
            body: 'Body 1'
        },{
            title: 'Example 2',
            body: 'Body 2'
        },{
            title: 'Example 3',
            body: 'Body 3'
        }]
        const store = testStore();
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPosts())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState)
        })
    })
})