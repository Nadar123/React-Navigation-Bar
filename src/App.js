import React from 'react';
import './index.scss';

import  ToolBar from './components/ToolBar'
import OpenSideBar from './components/OpenSideBar';
import Layout from './components/Layout'

class App extends React.Component{
 state = {
  openSideBar: false
 }

 openToggleBtn = () => {
  this.setState((prevState) => {
    return {openSideBar: !prevState.openSideBar}
  })
 }
 closeToggleBtn = () => {
  this.setState({openSideBar: false})
 }

  render() {

    let layout;
    if(this.state.openSideBar){  
      layout =  <Layout closeToggleBtn={this.closeToggleBtn}/>
    }

    return (
      <div style={{height: '100%'}} className="App">
        <ToolBar openToggleBtn={this.openToggleBtn}/>
        <OpenSideBar show={this.state.openSideBar} />
        {layout}
        <main className="main-content">
          it is the web page content
        </main>
      </div>
    );

  }
}

  

export default App;
