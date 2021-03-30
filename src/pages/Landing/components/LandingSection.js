/*
  Landing Section
*/

import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ type, children }) => (
  <section className={'section section-' + type}>
    <div className="section-container">{children}</div>
  </section>
);

Section.propTypes = {
  type: PropTypes.oneOf(['image', 'text']).isRequired,
  children: PropTypes.any,
};

export default Section;
