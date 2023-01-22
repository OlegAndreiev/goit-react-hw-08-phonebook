import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionForm.module.css';

export const SectionForm = ({ children }) => (
  <section className={css.section}>{children}</section>
);

SectionForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
