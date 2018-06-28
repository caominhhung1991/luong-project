import React, { Component } from 'react'
import Data from './Data/Data';

export default class Datas extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.datas.map(data => {
          return <Data key={data._id} data={data} clicked={this.props.selectedData}/>
        })}
      </ul>
    )
  }
}
