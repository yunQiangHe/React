import React, { Component, Fragment } from 'react'
import './Xiaojiejie.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [
                { id: 1, name: "头部按摩" },
                { id: 2, name: "精油开背" }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                {/* 我是注释 */}
                <div>
                    {/* <label for="shuruInput">服务名称</label> */}
                    <label htmlFor="shuruInput">服务名称</label>
                    <input
                        id="shuruInput"
                        className="myinput"
                        type='text'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {/*
                        this.state.list.map((item, index) => {
                            return (
                                 // <li key={index} dangerouslySetInnerHTML={{__html:item.name}}>
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <button onClick={this.deletItem.bind(this, index)}>X</button>
                                </li>
                            )
                        })
                    */}
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deletItem={this.deletItem.bind(this)}
                                />
                            )
                        })
                    }

                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log("input change event");
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value;  this指向Undefined
        this.setState({
            // inputValue: e.target.value  
            inputValue: this.input.value  //添加ref后的写法
        })
    }

    addList() {
        // 添加
        this.setState({
            // ES6 的合并数组
            list: [...this.state.list, { id: Math.ceil(Math.random() * 10000), name: this.state.inputValue }],
            inputValue: ""  //清空输入框
        },()=>{
            console.log(this.state.list);
        })

        console.log(this.state.list); //因为setState是异步的 数据少一项

    }

    deletItem(index) {
        // console.log(index);
        // console.log(this.state.list.splice(index, 1));

        // err 记住React是禁止直接操作state
        // this.state.list.splice(index, 1);
        // this.setState({
        //     list: this.state.list
        // })

        // 删除
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })

    }
}

export default Xiaojiejie