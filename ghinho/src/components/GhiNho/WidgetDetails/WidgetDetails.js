import React, { Component } from 'react'
import './WidgetDetails.scss';
import Aux from '../../../hoc/_Aux/_Aux';
export default class WidgetDetails extends Component {

  render() {
    // axios.get('./../upload/hinh/p')
    console.log(this.props.selectedData)
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
                    {
                      this.props.selectedData.images.map(image => {
                        return (
                          <img
                            key={`hinh`+this.props.selectedData._id}
                            className="widget-lythuyet__image"
                            src={`./../upload/hinh/${this.props.selectedData.url}/${image}`}
                            alt="congthuc"
                          />
                        )
                      })
                    }
                  </div>
                </div>
              </div>

              <div className='widget-lythuyet'>
                <h4 className="widget-lythuyet__text">
                  Video giải thích và Ví dụ: <button className="btn btn-sm btn-success">Mở video (-500C)</button>
                </h4>
                <div id="ghichu-videos">
                  {
                    this.props.selectedData.videos.map(video => {
                      return (
                        <video key={`video`+this.props.selectedData._id} className="widget-lythuyet__video" controls>
                          <source src={`./../upload/video/${this.props.selectedData.url}/${video}`} type="video/mp4" />
                        </video>
                      )
                    })
                  }

                </div>
              </div>
            </div>
            : <div id='widget-ghinho'></div>
        }
      </Aux>
    )
  }
}
