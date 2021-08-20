import React ,{ Component } from 'react'
import Header from './Components/header/index'
import Headline from './Components/headline/index'
import Button from './Components/button/Button'
import ListItems from './Components/listItems/ListItems'
import { connect } from 'react-redux'
import { fetchPosts } from './Actions/index'

const initialState = {
  hideBtn: false
};

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this)
  }

   fetch(){
    let a = this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }
  
  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render(){
    const { posts } = this.props;
    const { hideBtn } = this.state;
    return (
      <div data-test="appComponent">
        <Header />
        <Headline headline='Posts' desc='Click on the button to render posts'/>

        {!hideBtn &&
            <Button title='Click me to get list items' emitFunc={this.fetch}/>
          }
        {posts.length > 0 && 
        <div>
          {posts.map((post,index)=>{
            const { title , body }= post
            const configListItem ={
              title,
              desc: body
            };
            return (
              <ListItems {...configListItem} key={index}/>
            )
          })}
          </div>
          }
      </div>
    );
  }
  
}

const mapStateToProps = state =>{
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps,{fetchPosts})(App)
