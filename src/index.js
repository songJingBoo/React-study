import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextIsX: true,
      history: [Array(9).fill(null)],
      stepNumber: 0
    }
  }

  handlClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextIsX ? 'X' : 'O';
    this.setState({
      nextIsX: !this.state.nextIsX,
      history: history.concat([squares]),
      stepNumber: history.length
    });
  }

  jumpTo(i) {
    this.setState({
      stepNumber: i,
      nextIsX: (i % 2) === 0
    });
  }

  render() {
    const currentSquares = this.state.history[this.state.stepNumber];

    const winner = calculateWinner(currentSquares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.nextIsX ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onClick={(i) => this.handlClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {
              this.state.history.map((h, i) => {
                const desc = i ? 'Go to move #' + i : 'Go to game start';
                return (
                  <li key={i}>
                    <button onClick={() => this.jumpTo(i)}>{desc}</button>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
