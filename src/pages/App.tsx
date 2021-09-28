import * as React from 'react'
import Tile from '../components/Tile'

interface IProps {}

interface IState {
  boardSize: number[]
}

class App extends React.Component<IProps, IState> {
  state = {
    boardSize: [0,1,2],
  }
  render() {
    return (
      <div id="boardTable">
        <div className="board">
          {this.state.boardSize.map((row: number) => (
            <>
              {this.state.boardSize.map((col: number) => {
                console.log([row, col])
                return(
                  <Tile tileKey={[row, col]} />
                )}
              )}
            </>
          ))}
        </div>
      </div>
    )
  }
}

export default App
