import * as React from 'react'
import Tile from '../components/Tile'

type UserType = 'X' | 'O'

interface UserIndex {
  [x: number]: UserType
}

interface IProps {}

interface IState {
  boardSize: number[]
  currentUser: UserType
  boardState: Partial<UserIndex>
}

class App extends React.Component<IProps, IState> {
  state: IState = {
    boardSize: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    currentUser: 'X',
    boardState: {},
  }

  switchUser = (currentUser: UserType) => (currentUser === 'X' ? 'O' : 'X')

  onClick = (index: number, user: UserType) => {
    this.setState({
      boardState: { ...this.state.boardState, [index]: user },
      currentUser: this.switchUser(user),
    })
  }

  render() {
    return (
      <div id='boardTable'>
        <div className='currentUser'>Current User is {this.state.currentUser}</div>
        <div className='board'>
          {this.state.boardSize.map((index: number) => {
            return (
              <Tile
                tileKey={index}
                userTile={this.state.boardState[index]}
                onClick={() => this.onClick(index, this.state.currentUser)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
