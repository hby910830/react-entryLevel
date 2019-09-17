import React from 'react';
import Button from './components/button'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Button value="按钮1" onClick={this.outHandle.bind(this)}/>
        <Button value="按钮2"/>
        <Button value="按钮3"/>
      </div>
    );
  }
  outHandle(x){
    console.log('父组件的事件被调用了')
    console.log(x)
  }
}

export default App;
