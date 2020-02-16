import React from 'react';
import {input} from 'antd';
import ReactDOM from 'react-dom';
class App extends React.Component{
  render(){
    return(
    <div>
      <input id='user_name'/>
      <input id='password' type='password'/>
    </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));