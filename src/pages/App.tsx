import * as React from 'react'
import Tile from '../components/Tile'
import Button from '../components/Button'

const winningStates: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

type UserType = 'X' | 'O'

interface UserIndex {
  [x: number]: UserType
}

interface IProps {}

interface IState {
  boardSize: number[]
  currentUser: UserType
  boardState: Partial<UserIndex>
  isWinner?: UserType
  isTie: boolean
  validClicks: number
}

class App extends React.Component<IProps, IState> {
  state: IState = {
    boardSize: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    currentUser: 'X',
    boardState: {},
    isTie: false,
    validClicks: 0,
  }

  resetGame = () => {
    this.setState({
      currentUser: 'X',
      boardState: {},
      isWinner: undefined,
      validClicks: 0,
    })
  }

  gameState = (user: UserType, boardState: Partial<UserIndex>, validClicks: number) => {
    winningStates.forEach((winningPattern: number[]) => {
      const userWin: boolean = winningPattern
        .map((winningIdx: number) => (boardState[winningIdx] === user ? true : false))
        .every((v) => v === true)

      console.log(validClicks >= this.state.boardSize.length)

      if (userWin) {
        this.setState({ isWinner: user })
      } else if (validClicks >= this.state.boardSize.length) {
        this.setState({ isTie: true })
      }
    })
  }

  switchUser = (currentUser: UserType) => (currentUser === 'X' ? 'O' : 'X')

  onClick = (index: number, user: UserType, validClicks: number) => {
    const boardStateNew = { ...this.state.boardState, [index]: user }
    const validClicksNew = validClicks + 1

    this.setState({
      boardState: boardStateNew,
      currentUser: this.switchUser(user),
      validClicks: validClicksNew,
    })
    this.gameState(user, boardStateNew, validClicksNew)
  }

  render() {
    console.log(this.state.boardState)
    console.log(this.state.boardState)
    return (
      <div id='boardTable'>
        <div className='title'>Tic-Tac-Toe</div>
        <div className='currentUser'>
          {this.state.isTie
            ? 'Tie'
            : this.state.isWinner
            ? `Winner is ${this.state.isWinner}`
            : `Current User is ${this.state.currentUser}`}
        </div>
        <div className='board'>
          {this.state.boardSize.map((index: number) => {
            return (
              <Tile
                tileKey={index}
                userTile={this.state.boardState[index]}
                onClick={() => {
                  if (!this.state.boardState[index]) {
                    this.onClick(index, this.state.currentUser, this.state.validClicks)
                  }
                }}
              />
            )
          })}
        </div>
        <Button
          onClick={this.resetGame}
          text={this.state.isWinner ? 'Play again!' : 'Reset game'}
        />
      </div>
    )
  }
}

export default App
