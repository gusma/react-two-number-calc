import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          number1: 0,
          number2: 0,
          total: 0
      }
  }
  handleChange = (e) =>{
      const {name, value} = e.target;
      this.setState({
          [name]: value
      })
  }

  add = () => {
      const{number1, number2} = this.state;
      this.setState({
          total: (parseInt(number1)+parseInt(number2))
      })
  }

  render() {
      const {total} = this.state;
      return (
          <div>
             
               <ul>
                <li><input type="text" name="number1" onChange={this.handleChange} /></li>
                 
                <li><input type="text" name="number1" onChange={this.handleChange} /></li>

                <li><button onClick={this.add}>Add</button></li>

                <li class="result">{total}</li>
               </ul>
                 
              
          </div>
      );
  }
}

export default App;
