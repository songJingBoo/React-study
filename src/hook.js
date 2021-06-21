import React, { useState, useEffect, useMemo, PureComponent, useCallback } from 'react';

export default function HookPage(props) {
    // 1.useState用法
    const [count, setCount] = useState(0);
    // const [time, setTime] = useState(new Date());

    // 2.useEffect 相当于componentDidMount、componentDidUpdate
    useEffect(() => {
        document.title = `点击了${count}次`;
    }, [count]);// 前后两次count没变化，useEffect内置跳过逻辑

    // 4.只能在函数最外层调用Hook,会报错
    // if (count) {
    //     const [num, setNum] = useState(1);
    // }

    // 5.useMemo返回一个《momoized值》，可以根据依赖项来重新计算
    const expensive = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    }, [count]); // 不写依赖项时，任何state改变都会触发

    // 6.useCallback返回一个《memoized回调函数》
    // 当你把回调函数传递给经过优化的并使用'引用相等性'去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
    const addClick = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <p>useMemo: {expensive}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <div>{useClock().toLocaleTimeString()}</div>
            <Child addClick={addClick} />
        </div>
    )
}

// 3.自定Hook（必须以use定义，否则报错usesClock也不行）
function useClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        });
        // 2.1 清除effect
        return () => clearInterval(timer);
    }, []); // 这块依赖项为空

    return time;
}

class Child extends PureComponent {
    render() {
        console.log('child render');
        const { addClick } = this.props;
        return (
            <div>
                <h3>Child</h3>
                <button onClick={() => addClick()}>啥也不干就举个例子</button>
            </div>
        );
    }
}