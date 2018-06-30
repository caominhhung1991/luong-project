import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  congthucStyle: PropTypes.string,
  onChangeHandle: PropTypes.func.isRequired,
};


const Mon = (props) => {
  return (
    <div className="col-6">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <button className={[props.congthucStyle, "btn btn-switch"].join(' ')} disabled><i className='fa fa-check'></i> Môn</button>
        </div>
        <select name="mon" id="mon" className="form-control" onChange={this.onChangeHandle}>
          <option value="Toán">Toán</option>
          <option value="Hóa">Hóa</option>
          <option value="Lý">Lý</option>
        </select>
      </div>
    </div>
  );
};


Mon.propTypes = propTypes;


export default Mon;
