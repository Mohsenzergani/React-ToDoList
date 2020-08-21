import React, { Component } from 'react';
import Item from './Item'
class ListItem extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    {items.map(item => {
                        return (
                            <Item
                                key={item.id}
                                title={item.title}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                            />
                        )
                    })}
                    <button 
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}
                    >CLEAR LIST</button>
                </ul>
            </>
        );
    }
}

export default ListItem;
