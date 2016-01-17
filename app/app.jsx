import React from 'react';
import { render } from 'react-dom';
import Main from 'components/Main';
import 'stylesheets/style';

const mountPoint = document.getElementsByTagName('div')[0];
render(<Main />, mountPoint);
