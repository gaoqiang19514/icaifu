import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import style from './App.scss';

import {view as Loading} from './common/loading'

import {view as Home} from './pages/home'
import {view as Invest} from './pages/invest'
import {view as User} from './pages/user'
import {view as Other} from './pages/other'
import {view as Detail} from './pages/detail'
import {view as Buy} from './pages/buy'
import {view as Voucher} from './pages/voucher'
import {view as Safety} from './pages/safety'
import {view as Jjh} from './pages/jjh'
import { view as Activity } from './pages/activity'

import {view as Withdraw} from './pages/withdraw'
import {view as Recharge} from './pages/recharge'
import {view as ExchangeRecord} from './pages/exchangeRecord'
import {view as InvestRecord} from './pages/investRecord'

import {view as Login } from './pages/login'
import {view as Register } from './pages/register'
import {view as ForgetPassword } from './pages/forgetPassword'

import {view as Auth} from './common/auth/';

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
                                    enterActive: `${style['fade-enter-active']}`,
                                    leave: `${style['fade-leave']}`,
                                    leaveActive: `${style['fade-leave-active']}`,
                                    appear: `${style['fade-appear']}`,
                                    appearActive: `${style['fade-appear-active']}`
                                }}
                                transitionAppear={true}
                                transitionAppearTimeout={500}
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}
                            >
                                <Switch key={location.pathname} >
                                    <Route exact path="/" component={Home} />
                                    <Route  path="/home" component={Home} />
                                    
                                    <Auth path="/user" component={User} />

                                    <Route path="/other" component={Other} />

                                    <Route exact path="/invest" component={Invest} />
                                    <Route path="/invest/:id" component={Detail} />
                                    <Route path="/activity" component={Activity} />
                                    <Route path="/buy/:id" component={Buy} />
                                    <Route path="/jjh/:id" component={Jjh} />

                                    <Auth path="/voucher" component={Voucher} />
                                    <Route path="/safety" component={Safety} />

                                    <Auth path="/withdraw" component={Withdraw} />
                                    <Auth path="/recharge" component={Recharge} />
                                    <Auth path="/exchangeRecord" component={ExchangeRecord} />
                                    <Auth path="/investRecord" component={InvestRecord} />

                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                    <Route path="/forgetPassword" component={ForgetPassword} />

                                    <Route component={Home} />
                                </Switch>
                            </CSSTransitionGroup>
                        )
                    }
                } />

                <Loading />
	      	</div>
    	);
  	}
}

export default App;
