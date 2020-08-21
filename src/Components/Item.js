import React, { Component } from 'react';
import {FaPen,FaTrash} from 'react-icons/fa'
class Item extends Component {
    render() {
        const {title,handleDelete,handleEdit} = this.props;
        return (
            <>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success" onClick={handleEdit}>
                            <FaPen/>
                        </span>
                        <span className="mx-2 text-danger" onClick={handleDelete}>
                            <FaTrash/>
                        </span>
                    </div>
                </li>
            </>
        );
    }
}

export default Item;
