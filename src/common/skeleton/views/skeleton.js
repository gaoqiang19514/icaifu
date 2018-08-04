import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const buildLength = (count) => {
    const arr = [];
    for(let i = 0; i < count; i++){
        arr.push(i);
    }
    return arr;
}

const Product = () => {
    return (
        <div style={ { padding: '0.4rem 0 0.5333rem 0' } }>
            <div style={ { background: '#f7f7f8', color: 'transparent', fontSize: '0.3467rem', marginBottom: '0.4rem' } }>i享利JKXY20180612002</div>
            <div style={ { background: '#f7f7f8', height: '.8rem', marginBottom: '0.2667rem' } }></div>
            <div style={ { background: '#f7f7f8', color: 'transparent' } }>预期年化利率</div>
        </div>
    );
};

const Activity = () => {
    return (
        <div style={ { padding: '0.2667rem', marginBottom: '.4rem', background: '#fff' } }>
            <div style={ { width: '8.6667rem', height: '3.4667rem', background: '#f7f7f8', marginBottom: '0.2667rem' } }></div>
            <div style={ { fontSize:' 0.4rem', color: 'transparent', background: '#f7f7f8', marginBottom: '0.2667rem' } }>国庆投资活动</div>
            <div style={ { background: '#f7f7f8',color: 'transparent', marginBottom: '0.2667rem' } }>活动期间所有标的加息4%</div>
            <div style={ { background: '#f7f7f8', color: 'transparent' } }>活动期间所有标的加息4%</div>
        </div>
    );
};

const Coupon = () => {
    return (
        <div>Coupon Skeleton</div>
    );
};

const Placeholders = {
    "product": Product,
    "activity": Activity,
    "coupon": Coupon
};

const buildSkeleton = (type, count) => {
    const Item = Placeholders[type];
    const list = buildLength(count);

    return <div>
        {
            list.map(() => {
                return <Item key={ uuid() } />;
            })
        }
    </div>;
};

export default class extends Component {
    state = {
        ready: this.props.ready
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.ready !== this.props.ready){
            this.setState({ ready: nextProps.ready });
        }
    }

    render() {
        const { type, count, children } = this.props;

        if(this.state.ready){
            return children;
        }

        return buildSkeleton(type, count);
    }
}