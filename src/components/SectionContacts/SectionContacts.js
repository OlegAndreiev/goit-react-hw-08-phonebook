import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionContacts.module.css';

export const SectionContacts = ({ children }) => (
  <section className={css.section}>{children}</section>
);

SectionContacts.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
