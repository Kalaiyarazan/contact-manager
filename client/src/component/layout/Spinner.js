import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <div className='spinner'>
      <img src={spinner} alt='loading...' />
    </div>
  </Fragment>
);

export default Spinner;
