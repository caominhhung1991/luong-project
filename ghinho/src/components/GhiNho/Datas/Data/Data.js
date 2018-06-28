import React from 'react';

const Data = (props) => (
  <li onClick={() => props.clicked(props.data)} className="list-group-item d-flex justify-content-between align-items-center pointer">
    {props.data.title}
    <span className="badge badge-primary badge-pill">{Math.floor(Math.random() * 10)}</span>
  </li>
);

export default Data;
