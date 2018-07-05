import React, { Component } from 'react'
import './WidgetDetails.scss';
import Aux from '../../../hoc/_Aux/_Aux';
export default class WidgetDetails extends Component {

  lythuyetsHandle = () => {
    let lythuyets = [];
    this.props.selectedData.images.map(image => {
      lythuyets.push (
        <img
          key={`hinh`+this.props.selectedData._id}
          className="widget-lythuyet__image"
          src={`./../upload/hinh/${this.props.selectedData.url}/${image}`}
          alt="congthuc"
        />
      )
    })
    return lythuyets;
  }

  videosHandle = () => {
    let videos = [];
    this.props.selectedData.videos.map(video => {
      videos.push(
        <video key={`video`+this.props.selectedData._id} className="widget-lythuyet__video" controls>
          <source src={`./../upload/video/${this.props.selectedData.url}/${video}`} type="video/mp4" />
        </video>
      )
    })
    return videos;
  }

  render() {
    // axios.get('./../upload/hinh/p') 
    // console.log(this.props.selectedData)
    let btnShowVideoText = this.props.showVideo ? 'Đóng': 'Mở' ;
    let btnShowLyThuyetText = this.props.showLyThuyet ? 'Đóng': 'Mở' ;
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
                <h4 className="widget-lythuyet__text">Lý thuyết: <button 
                    className="btn btn-sm btn-primary"
                    onClick={this.props.showLyThuyetHandle}
                  >{btnShowLyThuyetText}</button></h4>
                <div id="ghichu-lythuyet-images">
                  <div>
                    {
                      this.props.showLyThuyet ? this.lythuyetsHandle() : null
                    }
                  </div>
                </div>
              </div>

              <div className='widget-lythuyet'>
                <h4 className="widget-lythuyet__text">
                  Video giải thích và Ví dụ: 
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={this.props.showVideoHandle}
                  >{btnShowVideoText} video (-500C)</button>
                </h4>
                <div id="ghichu-videos">
                  {
                    this.props.showVideo ? this.videosHandle() : null
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
