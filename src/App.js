import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cards, Charts} from './Components';
import styles from './App.module.css';
import { fetchData } from './data_api/';


class App extends React.Component {
 state = {
    data: '',
  }

//data mounting and fetching company grid data
 async componentDidMount() {
    const data = await fetchData();// catch the data 
	this.setState(data); // set data as state
  }
  

  
  render() {
	const data = this.state;
	//console.log(data);
	//sending data as a component
    return (
      <div className = {styles.container}>
	  <h1> Company Visual Growth Tracker </h1>
	    <Charts  />
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
