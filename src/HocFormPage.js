import React, { Component } from 'react';
import { Input } from 'antd';

import createFrom from './my-rc-form/';

const usernameRules = [{ required: true, message: '用户名不能为空' }];
const passwordRules = [{ required: true, message: '密码不能为空' }];

@createFrom
class HocFormPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { setFieldValue } = this.props.form;
        setFieldValue('username', 'default');
    }

    submit() {
        const { getFieldsValue, validateFields } = this.props.form;
        console.log('表单数据：', getFieldsValue());

        // 表单验证
        validateFields((err, data) => {
            if (!err) {
                alert('没问题');
            } else {
                alert(err[0]);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h4>用户名：</h4>
                {getFieldDecorator('username', usernameRules)(
                    <Input placeholder="用户名" />
                )}
                <h4>密  码：</h4>
                {getFieldDecorator('password', passwordRules)(
                    <Input placeholder="密  码" />
                )}
                <div>
                    <button onClick={() => this.submit()}>submit</button>
                </div>
            </div>
        );
    }
}

export default HocFormPage;


// 未使用高阶form之前
// export default class HocFormPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     setUsername(e) {
//         this.setState({username: e.target.value});
//     }
//     setPassword(e) {
//         this.setState({password: e.target.value});
//     }

//     submit() {
//         console.log(this.state);
//     }
//     render() {
//         return (
//             <div>
//                 <h4>用户名：</h4>
//                 <Input placeholder="用户名" onChange={(e) => this.setUsername(e)}/>
//                 <h4>密  码：</h4>
//                 <Input placeholder="密码" onChange={(e) => this.setPassword(e)}/>
//                 <div>
//                     <button onClick={() => this.submit()}>submit</button>
//                 </div>
//             </div>
//         );
//     }
// }