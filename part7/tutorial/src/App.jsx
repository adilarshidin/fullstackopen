import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anecdotes: [],
      current: 0
    };
  };

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/anecdotes');
    this.setState({ anecdotes: await response.json() });
  };

  handleClick = () => {
    const current = Math.floor(
      Math.random() * this.state.anecdotes.length
    );
    this.setState({ current });
  };

  render() {
    if (this.state.anecdotes.length === 0) {
      return <div>No anecdotes found...</div>
    };

    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
        <button onClick={this.handleClick}>next</button>
      </div>
    )
  };
};

export default App;
