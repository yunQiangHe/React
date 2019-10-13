import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './Xiaojiejie.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        // console.log("constructor");
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
        // console.log("3render--开始挂载渲染");
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
                <ul ref={(ul) => { this.ul = ul }}>
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
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <XiaojiejieItem
                                            key={index}
                                            content={item}
                                            index={index}
                                            deletItem={this.deletItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }

    // 不推荐了
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }

    // componentDidMount(){
    //     console.log("componentDidMount--组件挂载完成的时刻执行");
    // }

    // shouldComponentUpdate(){
    //     console.log('1shouldComponentUpdate---组件发生改变前执行');
    //     // index.js:1375 Warning: Xiaojiejie.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false. in Xiaojiejie (at src/​index.js:6)
    //     // 必须返回一个布尔值
    //     // 返回false 不会往下执行
    //     return true
    // }

    // 不推荐了
    // componentWillUpdate(){
    //     console.log("2componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行");
    // }

    // componentDidUpdate(){
    //     console.log("4componentDidUpdate----组件更新之后执行");
    // }

    // componentWillReceiveProps(){
    // 凡是组件都有生命周期函数，所以子组件也是有的，并且子组件接收了props，这时候函数就可以被执行了。
    //     console.log("componentWillReceiveProps");
    // }



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
        }, () => {
            console.log(this.state.list);
        })

        console.log(this.state.list); //因为setState是异步的 数据少一项

        axios.get('https://api.github.com/users/yunqianghe')
            .then((res) => { console.log(JSON.stringify(res)) })
            .catch((error) => { console.log(error) })

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