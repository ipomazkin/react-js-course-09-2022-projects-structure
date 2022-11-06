/**
 * @description The GeneralLayout component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function GeneralLayout(props) {
  return (
    <div className="">
      <header>
        <Header />
      </header>

      <main>
        {props.children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

GeneralLayout.propTypes = {
  children: PropTypes.node,
};

GeneralLayout.defaultProps = {};
