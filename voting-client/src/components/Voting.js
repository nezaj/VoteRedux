import React, {Component}  from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Voting extends Component {
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    )
  }
};

class Vote extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate =
      PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getPair = () => {
    return this.props.pair || [];
  };

  hasVotedFor = (entry) => {
    return entry === this.props.hasVoted;
  }

  isDisabled = () => {
    return !!this.props.hasVoted;
  };

  render() {
    return (
      <div>
        {this.getPair().map(entry =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
          )}
      </div>
    );
  }
}

const Winner = ({winner}) => (
  <div className="winner">
    Winner is {winner}!
  </div>
);
