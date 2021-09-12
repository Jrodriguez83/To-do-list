import React, { Component } from "react";
import DeleteButton from "./DeleteButton";
import './ListItem.css';

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            decoration: ''
        }
    }
    markDone = (event) => {
        const deco = this.state.decoration;
        
        if (deco === 'done') {
            this.setState({decoration:''});
        } else if (deco === '') {
            this.setState({decoration:'done'});
        }
        
    }
    render() {
        const { title, deleteItem, index } = this.props;
        return (
            <div key={index} className={`item`} onClick={this.markDone}>
                <div className={this.state.decoration}>{title}</div>
                <DeleteButton deleteItem={deleteItem} index={index} />
            </div>
        )
    }
}

export default ListItem;