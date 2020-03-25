import React from 'react';
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null
    }

    this.getEmployee = this.getEmployee.bind(this);
  }

  componentDidMount() {
    this.getEmployee();
  }
  
  getEmployee() {
      // When the setState during the call to API, loadingspinner true
      // Send the request
      axios.get('https://randomuser.me/api?nat=fr')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        
        this.setState({
          employee: data.results[0],
        });
      });
  }

  render() {
    const initEmployee = this.state.employee ? <DisplayEmployee employee={this.state.employee} /> : <LoadingSpinner/>
    
    return (
      <div>
        {initEmployee}
        < button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    );
  } 
}

export default App;
