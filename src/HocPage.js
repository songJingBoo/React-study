import React, { Component } from 'react';

// HOC高阶组件不要写在render方法中
const foo = Comp => props => {
    return (
        <div className="container">
            <Comp {...props} omg="omg" />
        </div>
    );
}

function Child() {
    return (
        <div>Child组件</div>
    )
}
// 1.用法一
const HocChild = foo(foo(Child));

// 2.用法二
@foo
@foo
class Child2 extends Component {
    render() {
        return (
            <div>Child2组件</div>
        )
    }
}
export default class HocPage extends Component {
    render() {
        return (
            <div>
                <div>HocPage</div>
                <HocChild />
                <Child2 />
            </div>
        );
    };
}
