import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button/Button.js';
import * as serviceWorker from './serviceWorker';

import color, { size } from './tema.js';

ReactDOM.render(
    <div>
        <Button color= {color.warning} textColor={color.white} hoverColor={color.warning_hover} hoverTextColor={color.white} outline={true} textSize={size.large}/>
        <Button color="#A7B2C3" textcolor="#000000" hoverColor="#863210" hoverTextColor="#0297A2"/>    
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
