import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';

import HookPage from './hook';
import DialogPage from './dialog';
import HocPage from './HocPage';

ReactDOM.render(
  <div>
    <Game />
    ====================
    <HookPage />
    ====================
    <DialogPage />
    ====================
    <HocPage />
  </div>
  ,
  document.getElementById('root')
);

