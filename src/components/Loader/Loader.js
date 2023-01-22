import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <div>
    <ThreeDots
      height="10"
      width="100%"
      radius="9"
      color="grey"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);

export default Loader;
