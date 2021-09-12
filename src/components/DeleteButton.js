import React from "react";
import './DeleteButton.css'

class DeleteButton extends React.Component {

    delete = () => {
        this.props.deleteItem(this.props.index);
    }

    clickHandler = ()=>{
        this.delete();
    }
    render() {
        return (
            <button className='deleteButton' alt='' onClick={this.clickHandler}>
                Delete
            </button>
        )
    }
}

export default DeleteButton;