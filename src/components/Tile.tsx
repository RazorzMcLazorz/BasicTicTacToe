import * as React from 'react'

interface IProps {
  tileKey: number
  userTile?: 'X' | 'O'
  onClick: () => void
}

interface IState {
  backTileColorShown: boolean
}

class Tile extends React.Component<IProps, IState> {
  state: IState = {
    backTileColorShown: false,
  }

  onHover = () => {
    this.setState({ backTileColorShown: true })
  }

  offHover = () => {
    this.setState({ backTileColorShown: false })
  }

  render() {
    return (
      <div
        className='tile'
        style={{ backgroundColor: this.state.backTileColorShown ? '#494949' : undefined }}
        onMouseOver={this.onHover}
        onMouseOut={this.offHover}
        onClick={this.props.onClick}>
        {this.props.userTile ? this.props.userTile : this.props.tileKey}
      </div>
    )
  }
}

export default Tile
