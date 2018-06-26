import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'react-flexible';

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

import { view as UserInfo } from './pages/userinfo';
import { view as Setting } from './pages/setting';

import {view as Auth} from './common/auth/';


const pageNotFound = {
    fontWeight: 'bold',
    paddingTop: '40%',
    fontSize: '0.8rem',
    textAlign: 'center'
};

const PageNotFound = () => {
    return <div style={ pageNotFound }>404 Page Not Found </div>
}

class App extends Component {
  	render() {
    	return (
	      	<div className="App">

                    <Route component={
                        ({location}) => {
                            return (
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.pathname}
                                        classNames="fade"
                                        appear={ true }
                                        timeout={ 300 }
                                    >
                                        <Switch key={location.pathname} >
                                            <Route exact path="/" component={Home} />
                                            <Route path="/home" component={Home} />
                                            
                                            <Auth path="/user" component={User} />

                                            <Route path="/other" component={Other} />

                                            <Route exact path="/invest" component={Invest} />
                                            <Route path="/invest/:id" component={Detail} />
                                            <Route path="/activity" component={Activity} />

                                            {/* 购买页 */}
                                            <Route path="/buy/:id" component={Buy} />
                                            <Route path="/jjh/:id" component={Jjh} />

                                            <Route path="/voucher" component={Voucher} />
                                            <Route path="/safety" component={Safety} />

                                            <Auth path="/withdraw" component={Withdraw} />
                                            <Auth path="/recharge" component={Recharge} />
                                            <Auth path="/exchangeRecord" component={ExchangeRecord} />
                                            <Auth path="/investRecord" component={InvestRecord} />

                                            <Route path="/login" component={Login} />
                                            <Route path="/register" component={Register} />
                                            <Route path="/forgetPassword" component={ForgetPassword} />

                                            
                                            <Auth path="/setting" component={ Setting } />
                                            <Auth path="/userinfo" component={ UserInfo } />
                                            
                                            <Route path='/404' component={PageNotFound} />
                                            <Redirect from='*' to='/404' />

                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>

                            )
                        }
                    } />

                <Loading />
	      	</div>
    	);
  	}
}

export default App;
