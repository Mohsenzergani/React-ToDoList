import React, { Component } from 'react';
import InputTodoList from './Components/Input'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <InputTodoList/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

