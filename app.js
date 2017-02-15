import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar';
import Tooltip from './Tooltip'
import TimerWrapper from './Clock'


ReactDOM.render(
    <div>
        <Navbar />
       <div className="container-fluid">
            <ul>
                <li>This Tooltip is being created by MR.<Tooltip text="Syed Manzar Hassan Jaffery">SMHJ</Tooltip></li>
                <li> This is created by using <Tooltip text="React and Webpack">R + Wp </Tooltip>.</li>
            </ul>
           
       </div>
       <TimerWrapper />
    </div>
, document.getElementById('app'));
