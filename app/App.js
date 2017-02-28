import React from 'react';
import styles from './App.css';
import HelloWorld from './helloworld.jsx';
console.log("MODULE")
// if (!window.socket) {
//   window.socket = window.io();
// }
// window.socket.emit('add user', "MIKE");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
      <HelloWorld />,
        bar and songog
      </div>
    );
  }
}
