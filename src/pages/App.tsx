import * as React from 'react'
import Tile from '../components/Tile'

interface IProps {}

interface IState {
  boardSize: number
}

class App extends React.Component<IProps, IState> {
  state = {
    boardSize: 3,
  }
  render() {
    const boardArraySize = Array.from(String(this.state.boardSize), Number)
    return (
      <div id="boardTable">
        {boardArraySize.map((row: number) => (
          <>
            {boardArraySize.map((col: number) => (
              <Tile tileKey={[row, col]} />
            ))}
          </>
        ))}
      </div>
    )
  }
}

export default App
