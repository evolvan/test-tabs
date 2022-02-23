/**
 * External dependencies.
 */
 import React from 'react';
 import  Tabs  from "../Tabs"; 
 import data from './tabs-data';
  
 export default {
     title: 'Components/Tabs',
     component: Tabs,
     argTypes: { onClick: { action: 'handleClick' } },
 };
 
 export const tabs = () => (
     <Tabs data={data}/>
 );