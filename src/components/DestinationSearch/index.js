// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="con">
        <div className="card">
          <h1>Destination Search</h1>
          <input type="search" />
          <div className="items-con"></div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
