import * as React from 'react'

interface IProps {
  text: string
  onClick: () => void
}

interface IState {
  backTileColorShown: boolean
}

class Button extends React.Component<IProps, IState> {
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
        className='button'
        style={{ backgroundColor: this.state.backTileColorShown ? '#494949' : undefined }}
        onMouseOver={this.onHover}
        onMouseOut={this.offHover}
        onClick={this.props.onClick}>
        {this.props.text}
      </div>
    )
  }
}

export default Button
