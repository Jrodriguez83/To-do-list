import React, { Component } from "react";
import './TextBox.css'


class TextBox extends Component {

    pressEnter = (e) => {
        if (e.code === 'Enter') {
            this.props.addItem();
        }
    }
    render() {
        const p = this.props;
        return (
            <div style={{
                justifyContent: 'center',
                display: 'flex'
            }}>
                <input
                    className='input'
                    type='text'
                    placeholder='Enter Items'
                    value={p.value}
                    onChange={p.onChangeText}
                    onKeyDown={this.pressEnter}
                />
                <button
                    className='enter'
                    onClick={p.addItem}
                >
                    Enter
                </button>
            </div>
        );
    }
}

export default TextBox;