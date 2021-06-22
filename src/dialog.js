import { Component } from "react";
import { createPortal } from "react-dom";

export default class DialogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <h3>弹窗窗</h3>
                <button onClick={() => this.setState({ show: !show })}>toggle</button>
                {show && <Dialog />}
            </div>
        );
    };
}

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
    }

    componentWillUnmount() {
        if (this.node) {
            document.body.removeChild(this.node);
        }
    }

    render() {
        return createPortal(
            <div className="dialog-box">
                ssssss
            </div>,
            this.node
        )
    }
}