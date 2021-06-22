import React, { Component } from 'react';

export default function createFrom(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.form = this.getForm();
            this.state = {};
            this.options = {};
        }

        handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }

        // 2.使用内部方法包装InputComp，提取name/value托管到createForm内部，onChange、校验方法也在其中
        getFieldDecorator = (filedName, options) => InputComp => {
            this.options[filedName] = options;
            return React.cloneElement(InputComp, {
                name: filedName,
                value: this.state[filedName] || '', // 这块的赋空值，触发onChange，将name放入state中
                onChange: this.handleChange
            })
        }

        getFieldValue = (filedName) => {
            return this.state[filedName];
        }

        getFieldsValue = () => {
            return this.state;
        }

        setFieldValue = (filedName, value) => {
            this.setState({[filedName]: value})
        }

        validateFields = (callback) => {
            const err = [];
            for (let filedName in this.options) {
                const rules = this.options[filedName];
                rules.forEach(rule => {
                    if (rule.required && !this.state[filedName]) {
                        err.push(rule.message);
                    }
                });
            }

            if (err.length) {
                callback(err, this.state);
            } else {
                callback(null, this.state);
            }
        }

        getForm() {
            return {
                getFieldDecorator: this.getFieldDecorator,
                getFieldValue: this.getFieldValue,
                getFieldsValue: this.getFieldsValue,
                setFieldValue: this.setFieldValue,
                validateFields: this.validateFields,
            }
        }

        render() {
            return (
                // 1.给父组件添加form
                <Comp {...this.props} form={this.form} /> 
            );
        }
    }
}