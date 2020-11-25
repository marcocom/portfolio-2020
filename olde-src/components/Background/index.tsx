import React, {ComponentProps, MouseEventHandler} from 'react';

import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Forest from './assets/forest.png';
import Foreground from './assets/foreground.png';
import Cloud1 from './assets/cloud1.png';
import Cloud2 from './assets/cloud2.png';

export interface IState {
  night: boolean,
}
interface IProps {

}

export const initialState = {
  night: true,
};

export const Background = (props:ComponentProps<any>): JSX.Element => {
  const toggleScene = (e:React.MouseEvent) => {
    console.log('toggleScene()');
  };
  return (
    <div className="scene">
      <a onClick={toggleScene} className="moon"/>
      <img src={Forest} className="forest"/>
      <img src={Foreground} className="foreground"/>
      <img src={Cloud1} className="cloud1"/>
      <img src={Cloud2} className="cloud2"/>
    </div>

  );
};
