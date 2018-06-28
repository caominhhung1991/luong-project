import React, { Component } from 'react';
import './../../Styles/Styles.scss';
import './GhiNhoContent.scss'
import Aux from '../../../hoc/_Aux/_Aux';

class GhiNhoContent extends Component {
  state = {
    mon: 'Toán',
    lop: 'Lớp 10',
    chuong: 'Chương 1',
    bai: 'Bài 1',
    chuyende: false,
    congthuc: 'Công thức',
    choosedChuong: true,
    choosedBai: true
  }

  onChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  switchChuyenDeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      ...this.state,
      chuyende: !this.state.chuyende
    })
  }

  switchCongThucHandler = (event) => {
    event.preventDefault();
    console.log(event.target.textContent)
    let text = this.state.congthuc === 'Công thức' ? 'Phương pháp' : 'Công thức';
    this.setState({
      ...this.state,
      congthuc: text
    })
    this.props.switchedCongThuc(this.state.congthuc);
  }

  switchChooseHandler = (event) => {
    event.preventDefault();
    let choosed = this.state[event.target.name];
    this.setState({
      ...this.setState,
      [event.target.name]: !choosed
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let loai = this.state.congthuc === 'Công thức' ? 'congthuc' : 'phuongphap';
    let lop = this.state.chuyende ? 'null' : this.state.lop;
    let chuong = this.state.chuyende ? 'null' : this.state.chuong;
    let bai = this.state.chuyende ? 'null' : this.state.bai;
    let lopChuyenDe = this.state.chuyende ? 'Chuyên đề' : 'Lớp';

    let url = `/api/${loai}/${this.state.mon}/${lopChuyenDe}/${lop}/${chuong}/${bai}`;
    console.log(url)
    this.props.dataHandler(url.trim());
  }

  render() {
    let congthucStyle = this.state.congthuc === 'Công thức' ? "btn-warning" : null;
    let iconChuong = this.state.choosedChuong ? "fa fa-check": 'fa fa-times';
    let iconBai = this.state.choosedBai? "fa fa-check": 'fa fa-times';

    let chuyende = <Aux>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <button 
              className={[congthucStyle, "btn btn-switch"].join(' ')} 
              onClick={this.switchChuyenDeHandler}><i className="fa fa-refresh"></i>  Lớp
            </button>
          </div>
          <select name="lop" id="lop" className="form-control"
            onChange={this.onChangeHandler}
            value={this.state.lop}
          >
            <option value="Lớp 10">Lớp 10</option>
            <option value="Lớp 11">Lớp 11</option>
            <option value="Lớp 12">Lớp 12</option>
          </select>
        </div>
      </div>

      <div className="col-6">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <button className={[congthucStyle, "btn"].join(' ')}
              name="choosedChuong"
              onClick={this.switchChooseHandler}
            ><i className={iconChuong}></i> Chương</button>
          </div>
          <select 
            name="chuong" id="chuong" className="form-control" 
            onChange={this.onChangeHandler}
            disabled={!this.state.choosedChuong}
          >
            <option value="Chương 1">Chương 1</option>
            <option value="Chương 2">Chương 2</option>
            <option value="Chương 3">Chương 3</option>
          </select>
        </div>
      </div>

      <div className="col-6">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <button 
              type="button" className={[congthucStyle, "btn"].join(' ')}
              name="choosedBai"
              onClick={this.switchChooseHandler}
            ><i className={iconBai}></i> bài</button>
          </div>
          <select name="bai" id="bai" className="form-control" 
            onChange={this.onChangeHandler}
            disabled={!this.state.choosedBai}
            >
            <option value="Bài 1">Bài 1</option>
            <option value="Bài 2">Bài 2</option>
            <option value="Bài 3">Bài 3</option>
          </select>
        </div>
      </div>
    </Aux>

    if (this.state.chuyende === true) {
      chuyende = <Aux>
        <div className="col-6">
          <div className="input-group input-group-sm">
            <button className={[congthucStyle, "btn btn-sm btn-switch w-100"].join(' ')} onClick={this.switchChuyenDeHandler}><i className="fa fa-refresh"></i> Chuyên đề</button>
          </div>
        </div>
      </Aux>
    }

    return (
      <form className="Form" onSubmit={this.onSubmitHandler}>
        <div className="row">
          <div className="col-12">
            <div className="input-group input-group-sm mb-2">
              <input type="text" className="form-control" placeholder="Tìm kiếm ..." />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button">Tìm</button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <button className={[congthucStyle, "btn btn-switch"].join(' ')} disabled><i className='fa fa-check'></i> Môn</button>
              </div>
              <select name="mon" id="mon" className="form-control" onChange={this.onChangeHandler}>
                <option value="Toán">Toán</option>
                <option value="Hóa">Hóa</option>
                <option value="Lý">Lý</option>
              </select>
            </div>
          </div>

          {chuyende}

          <div className="col-6">
            <button className="btn btn-danger btn-sm w-100">Enter</button>
          </div>

          <div className="col-6">
            <button className={[congthucStyle, "btn btn-sm btn-switch w-100"].join(' ')} onClick={this.switchCongThucHandler}>
              <i className="fa fa-refresh"></i> {this.state.congthuc}
            </button>
          </div>
        </div>


      </form>
    );
  }
}

export default GhiNhoContent;
