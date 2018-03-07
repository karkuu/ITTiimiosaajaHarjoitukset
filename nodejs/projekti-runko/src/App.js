import React, { Component } from 'react';
import ContainerTop from './midcomponents/ContainerTop';
import ContainerMid from './midcomponents/ContainerMid';
import ContainerContents from './midcomponents/ContainerContents';
import ContainerBottom from './midcomponents/ContainerBottom';


export default class App extends Component {
  render() {
    return (
      <div className="App">
		<ContainerTop/>
		<ContainerMid/>
		<ContainerContents/>
		<ContainerBottom/>
      </div>
    );
  }
}
