import React, { Component } from 'react';
import InputTodoList from './Components/Input';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './Components/ListItem'
class App extends Component {
  state = {
    items:[],
    id:uuidv4(),
    item:"",
    editItem :false
  }

  handleChange= e => {
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newITem= {
      id:this.state.id,
      title:this.state.item
    }
    const updateItems = [...this.state.items,newITem]
    this.setState({
      items:updateItems,
      id:uuidv4(),
      item:"",
      editItem:false
    })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }
  handleDelete = id => {
    const deleteItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:deleteItem
    })
  }
  handleEdit = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const selectItem = this.state.items.find(item => item.id === id);
    this.setState({
      items:filterItem,
      item:selectItem.title,
      id:id,
      editItem:true
    })
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <InputTodoList
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit= {this.handleSubmit}
              editItem={this.state.editItem}
              />
              <ListItem
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

