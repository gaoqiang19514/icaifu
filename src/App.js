import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import style from './App.scss';

import {view as Home} from './home'
import {view as Invest} from './invest'
import {view as User} from './user'
import {view as Other} from './other'
import {view as Detail} from './detail'
import {view as Buy} from './buy'
import {view as Voucher} from './voucher'
import {view as Safety} from './safety'
import {view as Jjh} from './jjh'
import {view as Recharge} from './recharge'
import {view as ExchangeRecord} from './exchangeRecord'

import {view as Login } from './login'
import {view as Register } from './register'
import {view as ForgetPassword } from './forgetPassword'

class App extends Component {
  	render() {
    	return (
	      	<div className="App">
                <Route component={
                    ({location}) => {
                        return (
                            <CSSTransitionGroup
                                component="div"
                                transitionName={{
                                    enter: `${style['fade-enter']}`,
                                    enterActive:  `${style['fade-enter-active']}`,
                                    leave:  `${style['fade-leave']}`,
                                    leaveActive:  `${style['fade-leave-active']}`,
                                    appear:  `${style['fade-appear']}`,
                                    appearActive:  `${style['fade-appear-active']}`
                                }}
                                transitionAppear={true}
                                transitionAppearTimeout={500}
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}
                            >
                                    <Switch key={location.pathname}>
                                        <Route exact path="/" component={Home}></Route>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/user" component={User}></Route>
                                        <Route path="/other" component={Other}></Route>

                                        <Route exact path="/invest" component={Invest}></Route>
                                        <Route path="/invest/:id" component={Detail}></Route>
                                        <Route path="/buy/:id" component={Buy}></Route>
                                        <Route path="/jjh/:id" component={Jjh}></Route>

                                        <Route path="/voucher" component={Voucher} />
                                        <Route path="/safety" component={Safety} />

                                        <Route path="/recharge" component={Recharge} />
                                        <Route path="/exchangeRecord" component={ExchangeRecord} />

                                        <Route path="/login" component={Login} />
                                        <Route path="/register" component={Register} />
                                        <Route path="/forgetPassword" component={ForgetPassword} />

                                        <Route component={Home}></Route>
                                    </Switch>

                            </CSSTransitionGroup>
                        )
                    }
                } />

	      	</div>
    	);
  	}
}

export default App;
