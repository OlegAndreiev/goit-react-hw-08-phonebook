import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionContacts.module.css';

export const SectionContacts = ({ title, children }) => (
  <section className={css.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

// export default SectionContacts;

SectionContacts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
