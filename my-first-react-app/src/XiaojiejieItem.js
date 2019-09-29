import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <li>
                {this.props.content.name}
                {/* <button onClick={this.handleClick.bind(this)}>X</button> */}
                <button onClick={this.handleClick}>X</button>
            </li>
        );
    }

    handleClick() {
        console.log("点击删除" + this.props.index);
        this.props.deletItem(this.props.index)

    }

}

XiaojiejieItem.propTypes = {
    index: PropTypes.number.isRequired,
    deletItem: PropTypes.func
}

XiaojiejieItem.defaulatProps = {

}

export default XiaojiejieItem;