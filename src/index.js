import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';

import HookPage from './hook';
import DialogPage from './dialog';
import HocPage from './HocPage';
import HocFormPage from './HocFormPage';

ReactDOM.render(
  <div>
    <Game />
    ====================
    <HookPage />
    ====================
    <DialogPage />
    ====================
    <HocPage />
    ====================
    <HocFormPage />
  </div>
  ,
  document.getElementById('root')
);

