import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.scss';
import Menu from './common/menu/'

import {view as Home} from './home'
import {view as Invest} from './invest'
import {view as User} from './user'
import {view as Other} from './other'
import {view as Detail} from './detail'
import {view as Buy} from './buy'

class App extends Component {
  	render() {
    	return (
	      	<div className="App">
	        	<Menu />
				
				<Switch>
					<Route exact path="/home" component={Home}></Route>
					<Route exact path="/invest" component={Invest}></Route>
					<Route exact path="/invest/:id" component={Detail}></Route>
					<Route exact path="/invest/buy/:id" component={Buy}></Route>
					<Route path="/user" component={User}></Route>
					<Route exact path="/other" component={Other}></Route>
					<Route component={Home}></Route>
				</Switch>
	      	</div>
    	);
  	}
}

export default App;
