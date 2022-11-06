/**
 * @description The AppWrapper component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import { queryClient } from "./services/queryClient";
import { App } from './App'
import { QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.scss"

export function AppWrapper(props) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
}

AppWrapper.propTypes = {};

AppWrapper.defaultProps = {};
