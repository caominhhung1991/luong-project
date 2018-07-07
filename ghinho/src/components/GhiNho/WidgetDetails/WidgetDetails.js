import React, { Component } from 'react';
import $ from 'jquery';
import './WidgetDetails.scss';
import Aux from '../../../hoc/_Aux/_Aux';
import ModalBaoSai from '../../Modals/ModalBaoSai';

export default class WidgetDetails extends Component {

  componentDidMount() {
    this.modalBaoSai = $('#modalBaoSai');
  }

  toggleModalBaoSai = (event) => {
    event.stopPropagation();
    this.modalBaoSai.modal('toggle');
  }

  modalSubmitBaoSai = (baosai) => {
    this.props.baoLoiHandle(baosai)
  }

  closeModalBaoSai = () => {
    this.modalBaoSai.modal('toggle');
  }

  lythuyetsHandle = () => {
    let lythuyets = [];
    this.props.selectedData.images.map(image => {
      lythuyets.push(
        <img
          key={`hinh` + this.props.selectedData._id}
          className="widget-lythuyet__image"
          src={`./../upload/hinh/${this.props.selectedData.url}/${image}`}
          alt="congthuc"
        />
      )
      return null;
    })
    return lythuyets;
  }

  videosHandle = () => {
    let videos = [];
    this.props.selectedData.videos.map(video => {
      videos.push(
        <video key={`video` + this.props.selectedData._id} className="widget-lythuyet__video" controls>
          <source src={`./../upload/video/${this.props.selectedData.url}/${video}`} type="video/mp4" />
        </video>
      )
      return null;
    })
    return videos;
  }

  render() {
    // axios.get('./../upload/hinh/p') 
    // console.log(this.props.selectedData)
    let btnShowVideoText = this.props.showVideo ? 'Đóng' : 'Mở';
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

              <details className='widget-lythuyet' open>
                <summary
                  className="widget-lythuyet__text"
                  onClick={this.props.showLyThuyetHandle}
                >Lý thuyết: <button
                  className="btn btn-sm btn-warning mb-1"
                  onClick={this.toggleModalBaoSai}
                >Báo sai</button>
                </summary>
                <div id="ghichu-lythuyet-images">
                  <div>{this.props.showLyThuyet ? this.lythuyetsHandle() : null}</div>
                </div>
              </details>

              <div className='widget-lythuyet'>
                <h4 className="widget-lythuyet__text">
                  Video giải thích và Ví dụ: <button
                    className="btn btn-sm btn-primary"
                    onClick={this.props.showVideoHandle}
                  > {btnShowVideoText} (-500C)</button>
                </h4>
                <div id="ghichu-videos">{this.props.showVideo ? this.videosHandle() : null}</div>
              </div>
            </div> : <div id='widget-ghinho'></div>
        }
        <ModalBaoSai
          selectedData={this.props.selectedData}
          contentBaoSai={this.props.contentBaoSai}
          toggleModalBaoSai={this.toggleModalBaoSai}
          onChangeValue={this.props.onChangeValue}
          modalSubmitBaoSai={this.modalSubmitBaoSai}
        />
      </Aux>
    )
  }
}
