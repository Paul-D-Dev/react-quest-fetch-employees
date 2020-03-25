import React from 'react';
import DisplayEmployee from './components/DisplayEmployee';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = sampleEmployee;
  }
  render() {

    return (
      <div>
      <DisplayEmployee employee={sampleEmployee}/>
    </div>
    );
  } 
}

export default App;
