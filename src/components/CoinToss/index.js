// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onChange = () => {
    const {toss} = this.state
    const tossresult = Math.floor(Math.random() * 2)

    if(toss===0){
        this.setState((prevState)=>({image:'https://assets.ccbp.in/frontend/react-js/heads-img.png',total:prevState.total+1,heads:prevState.heads+1,tails:prevState.tails+1})
    
    else
        this.setState((prevState)=>({image:'https://assets.ccbp.in/frontend/react-js/tails-img.png',total:prevState.total+1,heads:prevState.heads+1,tails:prevState.tails+1})
    
  }
  

  render() {
    const {image, total, heads, tails} = this.state
    //const toss=this.tosschanges()
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="button" onClick={this.onChange}>
            Toss Coin
          </button>
          <div className="scorecontainer">
            <p className="scorebox">Total: {total}</p>
            <p className="scorebox">Heads: {heads}</p>
            <p className="scorebox">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss