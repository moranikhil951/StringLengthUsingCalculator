// Write your code here.

import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  userButton = () => {
    this.setState({searchInput: ''})
  }

  InputUser = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const inputLength = searchInput.length
    return (
      <div className="Container">
        <div className="cal-info-calcualator">
          <h1 className="cal-heading">Calculate the Letters you enter</h1>
          <div className="flex">
            <label htmlFor="searchId" className="cal-para">
              Enter the phrase
            </label>

            <input
              type="text"
              className="searchInput"
              onChange={this.InputUser}
              value={searchInput}
              placeholder="Enter the phrase"
              id="searchId"
            />
          </div>
          <button
            type="button"
            onClick={this.userButton}
            className="buttonUser"
          >
            <p> No.of letters: {inputLength} </p>
          </button>
        </div>
        <div className="imgCon">
          <img
            alt="letters calculator"
            className="imgUrl"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
