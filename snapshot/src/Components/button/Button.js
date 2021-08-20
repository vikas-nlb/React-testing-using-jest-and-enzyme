import React , { Component} from 'react'
import PropTypes from 'prop-types'

class Button extends Component{
    submitbutton(){
        if(this.props.emitFunc){
            this.props.emitFunc()
        }
    }
    exampleMethod_returnsAValue(number) {
        return number + 1;
      }
    render(){
        const {title} = this.props
        return(
            <button onClick ={()=>{this.submitbutton()}} data-test="buttonComponent">
                {this.props.title}
            </button>
        )
    }
}

Button.propTypes={
    title: PropTypes.string,
    emitFunc: PropTypes.func,
}

export default Button