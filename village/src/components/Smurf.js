

import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  console.log(props)
  return (
    <div className="Smurf">
      <Link to = {`/smurf/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick = {(e) => props.smurfKiller(e, props.id)}>KILL</button>
      
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;