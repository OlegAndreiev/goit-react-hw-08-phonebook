import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionForm.module.css';

export const SectionForm = ({ title, children }) => (
  <section className={css.section}>
    {/* <h2>{title}</h2> */}
    {children}
  </section>
);

SectionForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
