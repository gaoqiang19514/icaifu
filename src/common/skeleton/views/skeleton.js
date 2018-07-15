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
        <div>Product Skeleton</div>
    );
};

const Activity = () => {
    return (
        <div>
            <div>Activity</div>
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
        if(nextProps.ready){
            setTimeout(() => {
                this.setState({ ready: true });
            }, 1000)
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