// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isHide: false,
    inHide: false,
  }

  onHide = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  onFhide = () => {
    this.setState(prevState => ({inHide: !prevState.inHide}))
  }

  getFirstHide = () => {
    const {isHide} = this.state
    return isHide ? (
      <div className="container3">
        <p className="heading2">Joe</p>
      </div>
    ) : null
  }

  getLastHide = () => {
    const {inHide} = this.state
    return inHide ? (
      <div className="container3">
        <p className="heading2">Jonas</p>
      </div>
    ) : null
  }

  render() {
    const FirstHide = this.getFirstHide()
    const LastHide = this.getLastHide()
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div className="button-container">
            <button type="button" className="button" onClick={this.onHide}>
              Show/Hide Firstname
            </button>
            {FirstHide}
          </div>
          <div className="button-container">
            <button type="button" className="button" onClick={this.onFhide}>
              Show/Hide Lastname
            </button>
            {LastHide}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
