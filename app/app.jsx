import React from 'react';
import { render } from 'react-dom';
import List from 'components/MangaList';
import 'stylesheets/style';

const mountPoint = document.getElementsByTagName('div')[0];
render(<List />, mountPoint);
