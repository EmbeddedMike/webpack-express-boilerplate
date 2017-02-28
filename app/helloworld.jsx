import React from 'react';
export default class HelloWorld extends React.Component {
  constructor(props) {
    console.log("contssructor");
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
   this.setState(prevState => ({
     isToggleOn: !prevState.isToggleOn
   }));
 }

  render() {
    // Play with it...
    const name = 'World';

    return (
    <div>
    <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
      <h2 className="hello-world">
        <span className="hello-world__i">Hello, {name}</span>
      </h2>
      </div>
    );
  }
}
