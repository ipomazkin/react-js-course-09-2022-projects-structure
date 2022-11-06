/**
 * @description The HomePage component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { HomeView } from "../components/HomeView";
import { GeneralLayout } from "../layouts/GeneralLayout";

export function HomePage(props) {
  return (
    <GeneralLayout>
      <HomeView />
    </GeneralLayout>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};
