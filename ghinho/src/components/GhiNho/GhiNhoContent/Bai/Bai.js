import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  bai: PropTypes.string.isRequired,
  iconBai: PropTypes.string.isRequired,
  choosedBai: PropTypes.bool.isRequired,
  congthucStyle: PropTypes.string,
  switchChooseHandle: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};


const Bai = (props) => {
  return (
    <div className="col-6">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <button
            type="button" 
            className={["btn", props.congthucStyle].join(' ')}
            name="choosedBai"
            onClick={(event) => props.switchChooseHandle(event, 'choosedBai')}
          ><i 
            className={props.iconBai}
          ></i> bài</button>
        </div>
        <select name="bai" id="bai" 
          className="form-control"
          value={props.bai}
          onChange={props.onChangeHandle}
          disabled={!props.choosedBai}
        >
          <option value="Bài 1">Bài 1</option>
          <option value="Bài 2">Bài 2</option>
          <option value="Bài 3">Bài 3</option>
        </select>
      </div>
    </div>
  );
};


Bai.propTypes = propTypes;


export default Bai;
