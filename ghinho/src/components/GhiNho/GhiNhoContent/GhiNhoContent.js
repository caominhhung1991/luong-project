import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../Styles/Styles.scss';
import './GhiNhoContent.scss'
import Aux from '../../../hoc/_Aux/_Aux';
import Search from './Search/Search';
import Mon from './Mon/Mon';
import Lop from './Lop/Lop';
import Chuong from './Chuong/Chuong';
import Bai from './Bai/Bai';

const propTypes = {
  dataHandle: PropTypes.func.isRequired,
  switchedCongThuc: PropTypes.func.isRequired,
};

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

  onChangeHandle = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  switchChuyenDeHandle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      ...this.state,
      chuyende: !this.state.chuyende
    })
  }

  switchCongThucHandle = (event) => {
    event.preventDefault();
    console.log(event.target.textContent)
    let text = this.state.congthuc === 'Công thức' ? 'Phương pháp' : 'Công thức';
    this.setState({
      ...this.state,
      congthuc: text
    })
    this.props.switchedCongThuc(this.state.congthuc);
  }

  switchChooseHandle = (event) => {
    event.preventDefault();
    let choosed = this.state[event.target.name];
    // console.log(event.target.name)
    if (event.target.name === 'choosedChuong') {
      this.setState({
        ...this.setState,
        [event.target.name]: !choosed,
        choosedBai: !choosed,
      })
    } else {
      this.setState({
        ...this.setState,
        choosedChuong: true,
        [event.target.name]: !choosed
      })
    }
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    let loai = this.state.congthuc === 'Công thức' ? 'congthuc' : 'phuongphap';
    let lop = this.state.chuyende ? 'empty' : this.state.lop;
    let chuong = this.state.chuyende || !this.state.choosedChuong ? 'empty' : this.state.chuong;
    let bai = this.state.chuyende || !this.state.choosedBai ? 'empty' : this.state.bai;
    let lopChuyenDe = this.state.chuyende ? 'Chuyên đề' : 'Lớp';

    let url = `/api/${loai}/${this.state.mon}/${lopChuyenDe}/${lop}/${chuong}/${bai}`;
    console.log(url)
    this.props.dataHandle(url.trim());
  }

  render() {
    let congthucStyle = this.state.congthuc === 'Công thức' ? "btn-warning" : null;
    let iconChuong = this.state.choosedChuong ? "fa fa-check" : 'fa fa-times';
    let iconBai = this.state.choosedBai ? "fa fa-check" : 'fa fa-times';

    let chuyende = <Aux>
      <Lop
        lop={this.state.lop}
        congthucStyle={congthucStyle}
        switchChuyenDeHandle={this.switchChuyenDeHandle}
        onChangeHandle={this.onChangeHandle}
      />

      <Chuong
        iconChuong={iconChuong}
        chuong={this.state.chuong}
        choosedChuong={this.state.choosedChuong}
        congthucStyle={congthucStyle}
        switchChooseHandle={this.switchChooseHandle}
        onChangeHandle={this.onChangeHandle}
      />

      <Bai
        iconBai={iconBai}
        bai={this.state.bai}
        choosedBai={this.state.choosedBai}
        congthucStyle={congthucStyle}
        switchChooseHandle={this.switchChooseHandle}
        onChangeHandle={this.onChangeHandle}
      />
    </Aux>

    if (this.state.chuyende === true) {
      chuyende = <Aux>
        <div className="col-6">
          <div className="input-group input-group-sm">
            <button
              className={[congthucStyle, "btn btn-sm btn-switch w-100"].join(' ')}
              onClick={this.switchChuyenDeHandle}
            >
              <i className="fa fa-refresh"></i> Chuyên đề
            </button>
          </div>
        </div>
      </Aux>
    }

    return (
      <Aux>
        <Search dataHandle={this.props.dataHandle} />
        <form className="Form" onSubmit={this.onSubmitHandle}>
          <div className="row">


            <Mon
              congthucStyle={congthucStyle}
              onChangeHandle={this.onChangeHandle}
            />

            {chuyende}

            <div className="col-6">
              <button className={[congthucStyle, "btn btn-sm btn-switch w-100"].join(' ')} onClick={this.switchCongThucHandle}>
                <i className="fa fa-refresh"></i> {this.state.congthuc}
              </button>
            </div>

            <div className="col-6">
              <button className="btn btn-danger btn-sm w-100">Enter</button>
            </div>
          </div>


        </form>
      </Aux>
    );
  }
}

GhiNhoContent.propTypes = propTypes;

export default GhiNhoContent;
