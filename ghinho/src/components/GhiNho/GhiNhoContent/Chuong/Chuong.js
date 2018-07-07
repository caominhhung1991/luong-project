import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  chuong: PropTypes.string.isRequired,
  iconChuong: PropTypes.string.isRequired,
  choosedChuong: PropTypes.bool.isRequired,
  congthucStyle: PropTypes.string,
  switchChooseHandle: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};


const Chuong = (props) => {
  return (
    <div className="col-6">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <button 
            className={[props.congthucStyle, "btn"].join(' ')}
            name="choosedChuong"
            onClick={(event) => props.switchChooseHandle(event, 'choosedChuong')}
          ><i className={props.iconChuong}></i> Chương</button>
        </div>
        <select
          name="chuong" id="chuong" 
          className="form-control"
          value={props.chuong}
          onChange={props.onChangeHandle}
          disabled={!props.choosedChuong}
        >
          <option value="Chương 1">Chương 1</option>
          <option value="Chương 2">Chương 2</option>
          <option value="Chương 3">Chương 3</option>
        </select>
      </div>
    </div>
  );
};


Chuong.propTypes = propTypes;


export default Chuong;
