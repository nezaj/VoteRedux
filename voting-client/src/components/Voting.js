import React, {Component}  from 'react'

export default class Voting extends Component {
  getPair = () => {
    return this.props.pair || [];
  };

  render() {
    return (
      <div>
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
          )}
      </div>
    );
  }
}
