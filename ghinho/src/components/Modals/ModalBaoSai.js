import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  toggleModalBaoSai: PropTypes.func.isRequired,
  contentBaoSai: PropTypes.string.isRequired,
  selectedData: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  modalSubmitBaoSai: PropTypes.func.isRequired,
};

class ModalBaoSai extends Component {

  onSubmit = (event) => {
    const contentBaoSai = this.props.contentBaoSai;
    if (contentBaoSai === '') {
      return 0;
    }
    let baosai = {
      username: 'Cao Minh Hưng',
      email: 'caominhhung1991@gmail.com',
      method: this.props.selectedData,
      content: contentBaoSai

    }
    this.props.modalSubmitBaoSai(baosai);

    this.props.toggleModalBaoSai(event);
  }

  render() {
    // console.log(this.props.selectedData)
    return (
      <div className="modal fade" id="modalBaoSai" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Báo sai</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <div className="col-5">
                    <label>Họ tên:</label>
                    <input type="text" className="form-control form-control-sm" value="Cao Minh Hưng" />
                  </div>

                  <div className="col-7">
                    <label>Email:</label>
                    <input type="text" className="form-control form-control-sm" value="caominhhung1991@gmail.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Tên {this.props.selectedData.method}:</label>
                  <input type="text" className="form-control form-control-sm" value={this.props.selectedData.title} />
                </div>

                <div className="form-group">
                  <label>Nội dung:</label>
                  <textarea
                    type="text" cols="30" rows="7"
                    className="form-control form-control-sm"
                    name="contentBaoSai"
                    value={this.props.contentBaoSai}
                    onChange={this.props.onChangeValue}
                  >
                  </textarea>
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
              <button type="submit" onClick={this.onSubmit} className="btn btn-success">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


ModalBaoSai.propTypes = propTypes;


export default ModalBaoSai;
