import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import BScroll from 'better-scroll';

import './index.css';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { flag, children } = this.props;

        return (
            <CSSTransition in={ flag } classNames="fade" appear={ true } timeout={ { enter: 500, exit: 300 } } unmountOnExit>
                <div className="layer">
                    <CSSTransition in={ flag } classNames="slide" appear={ true } timeout={ { enter: 500, exit: 300 } } >
                        <div className="layer__content">
                            { children }
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>
        )
    }
}

export class AnimateFullLayer extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { flag, children } = this.props;

        return(
            <CSSTransition in={ flag } classNames="aside" appear={ true } timeout={ { enter: 500, exit: 300 } } unmountOnExit>
                <div className="full-layer">
                    <div className="full-layer__content">
                        { children }
                    </div>
                </div>
            </CSSTransition>
        )
    }

}