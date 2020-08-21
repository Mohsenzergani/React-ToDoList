import React, { Component } from 'react';
import { FaBook } from 'react-icons/fa'
class Input extends Component {
    render() {
        const { handleSubmit, item, handleChange ,editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <FaBook />
                            </div>
                        </div>
                        <input type="text"
                            value={item}
                            className="form-control text-capitalize"
                            onChange={handleChange}
                            placeholder="add todo list" />

                    </div>
                    <button type="submit"
                        disabled= { item ? false : true}
                        className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3 text-uppercase"}>
                        {editItem ? 'Edit Me' : "Add Me"}
                    </button>
                </form>
            </div>
        );
    }
}

export default Input;
