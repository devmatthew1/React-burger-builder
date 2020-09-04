import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';
import Logo from '../../Logo/Logo';


const toolbar = ( props ) => (
    <header className="Toolbar">
        
    
      <div className="Logo"><Logo/></div>
      
      <nav>
      	<NavigationItems/>
      </nav>
       
    </header>
);

export default toolbar;