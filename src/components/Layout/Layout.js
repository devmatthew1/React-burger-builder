import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Lux';
import './Layout.css';

const layout = ( props ) => (
    <Aux>
        <Toolbar/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;