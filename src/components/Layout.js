import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import './Layout.scss';

export default ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
