import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Headline extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { headline, desc } = this.props;
        if(!headline){
            return null
        }
        return(
            <div data-test="headlineBox">
                <h3 data-test="headline">{headline}</h3>
                <h4 data-test="desc">{desc}</h4>
            </div>
        )
    }
}

Headline.propTypes={
    headline: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        working: PropTypes.bool
    }))
}

export default Headline