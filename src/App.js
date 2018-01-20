import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.scss';
import Menu from './common/menu/'

import {view as Home} from './home'
import {view as Invest} from './invest'
import {view as User} from './user'
import {view as Other} from './other'

class App extends Component {
  	render() {
    	return (
	      	<div className="App">
	        	<Menu />
	        	<Route exact path="/home" component={Home}></Route>
	        	<Route path="/invest" component={Invest}></Route>
	        	<Route path="/user" component={User}></Route>
	        	<Route path="/other" component={Other}></Route>
	      	</div>
    	);
  	}
}

export default App;
