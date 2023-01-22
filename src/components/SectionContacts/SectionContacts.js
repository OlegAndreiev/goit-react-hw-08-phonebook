import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionContacts.module.css';

export const SectionContacts = ({ title, children }) => (
  <section className={css.section}>
    {/* {title && <h2>{title}</h2>} */}
    {children}
  </section>
);

SectionContacts.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
