import { Fragment } from 'react';

import Spinner from 'react-bootstrap/Spinner';

const LoadSpinner = () => {
  return (
    <Fragment>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </Fragment>
  );
};

export default LoadSpinner;
