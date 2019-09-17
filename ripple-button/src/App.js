import React from 'react';
import Button from './components/button'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Button value="按钮1"/>
        <Button value="按钮2"/>
        <Button value="按钮3"/>
      </div>
    );
  }
}

export default App;
