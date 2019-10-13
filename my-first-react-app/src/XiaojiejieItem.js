import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        console.log("子组件渲染render");
        return (
            <li>
                {this.props.content.name}
                {/* <button onClick={this.handleClick.bind(this)}>X</button> */}
                <button onClick={this.handleClick}>X</button>
            </li>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log("nextProps:变化后的属性;");
        // console.log(nextProps);
        // console.log("nextState:变化后的状态;");
        // console.log(nextState);
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    // componentWillReceiveProps(){
    //     console.log("子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行---componentWillReceiveProps");
    // }

    // componentWillUnmount(){
    //     console.log("componentWillUnmount/当组件从页面中删除的时候执行");
    // }

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