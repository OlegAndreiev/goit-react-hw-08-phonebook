import React from 'react';
import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <div className={css.LoaderOverlay}>
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
