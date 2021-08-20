import React , {Component} from 'react'
import PropTypes from 'prop-types'

class ListItems extends Component{
    render(){
        const {title,desc} = this.props
        if(!title){
            return null
        }
        return(
            <div data-test="listItems">
                <h1 data-test='list-item-title'>{title}</h1>
                <div data-test='list-item-desc'>{desc}</div>
            </div>
        )
    }S
}

ListItems.propTypes ={
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItems