import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  lop: PropTypes.string.isRequired,
  congthucStyle: PropTypes.string,
  switchChuyenDeHandle: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};


const Lop = (props) => {
  return (
    <div className="col-6">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <button
            className={[props.congthucStyle, "btn btn-switch"].join(' ')}
            onClick={props.switchChuyenDeHandle}><i className="fa fa-refresh"></i>  Lớp
            </button>
        </div>
        <select name="lop" id="lop" className="form-control"
          onChange={props.onChangeHandle}
          value={props.lop}
        >
          <option value="Lớp 10">Lớp 10</option>
          <option value="Lớp 11">Lớp 11</option>
          <option value="Lớp 12">Lớp 12</option>
        </select>
      </div>
    </div>
  );
};


Lop.propTypes = propTypes;


export default Lop;
