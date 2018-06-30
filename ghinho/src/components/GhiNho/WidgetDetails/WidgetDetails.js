import React, { Component } from 'react'
import './WidgetDetails.scss';
import Aux from '../../../hoc/_Aux/_Aux';
import axios from 'axios';
export default class WidgetDetails extends Component {

  render() {
    // axios.get('./../upload/hinh/p')
    console.log(this.props)
    return (
      <Aux>
        {
          this.props.showed ?
            <div id='widget-ghinho'>
              <div className='widget-title'>
                <div className="widget-title__text">{this.props.selectedData.title}</div>
                <span className="closeWidgetBtn" onClick={this.props.closedWiget}>
                  <i className='fa fa-times'></i>
                </span>
              </div>
              <div className='widget-lythuyet'>
                <h4 className="widget-lythuyet__text">Lý thuyết:</h4>
                <div id="ghichu-lythuyet-images">
                  <div>
                    <img className="widget-lythuyet__image" src="./../test.png" alt="congthuc"/>
                  </div>
                </div>
              </div>

              <div className='widget-lythuyet'>
                <h4 className="widget-lythuyet__text">
                  Video giải thích và Ví dụ: <button className="btn btn-sm btn-success">Mở video (-500C)</button>
                </h4>
                <div id="ghichu-videos">
                  <video className="widget-lythuyet__video" controls>
                    <source src="http://hocwebchuan.com/reference/tag/example/movie/coutdown.ogv" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            : <div id='widget-ghinho'></div>
        }
      </Aux>
    )
  }
}
