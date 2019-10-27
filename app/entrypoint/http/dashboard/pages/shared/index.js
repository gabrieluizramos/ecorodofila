// Default
import React from 'react';
import PropTypes from 'prop-types';

// Next
import Document, { Html, NextScript } from 'next/document';

// Components
import PageHead from './head';
import PageBody from './body';

class Page extends Document {
  render() {
    return (
      <Html>
        <PageHead />
        <PageBody />
        <NextScript />
      </Html>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element
};

export default Page;
