import React from 'react';
import { render } from 'react-dom';
import App from './index';

export default function renderTo(element, config) {
  render(<App {...config} />, element);
}
