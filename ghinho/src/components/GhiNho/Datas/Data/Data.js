import React from 'react';

const Data = (props) => {
  // console.log(props.data)
  let badgeStyle = props.data.method === 'phương pháp' ? 'badge-success': 'badge-warning';
  return (
    <li 
      onClick={() => props.clicked(props.data)} 
      className="list-group-item d-flex justify-content-between align-items-center pointer"
    >
      {props.data.title}
      <span className={[badgeStyle, 'badge badge-pill'].join(' ')} >
        {props.data.method}
      </span>
    </li>
  )
};

export default Data;
