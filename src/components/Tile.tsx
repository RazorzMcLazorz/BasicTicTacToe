import * as React from 'react'

interface IProps {
  tileKey: number[]
}

interface IState {}

class Tile extends React.Component<IProps, IState> {
  render() {
    return <div className='tile'>{this.props.tileKey.toString()}</div>
  }
}

export default Tile
