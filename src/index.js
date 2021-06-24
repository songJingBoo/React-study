import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';

import HookPage from './hook';
import DialogPage from './dialog';
import HocPage from './HocPage';
import HocFormPage from './HocFormPage';
import NavPage from './navPage';

ReactDOM.render(
  <div>
    {/* <Game /> */}
    ====================
    {/* <HookPage /> */}
    ====================
    <DialogPage />
    ====================
    {/* <HocPage /> */}
    ====================
    {/* <HocFormPage /> */}
    ====================
    <NavPage />
  </div>
  ,
  document.getElementById('root')
);

