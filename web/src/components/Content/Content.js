import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.array.isRequired
};

export default Content;
