import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={About} path='/About' />
    <Route component={ClassList} path='/classlist/:class' />
    <Route component={Student} path='/student/:id' />
  </Switch>
);