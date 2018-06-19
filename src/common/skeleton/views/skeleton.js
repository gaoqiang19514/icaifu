import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import styles from './styles.scss';

const Item = () => {
	return (
		<div style={{padding: '0.4rem 0 0.5333rem 0', background: '#fff'}}>
			<div style={{fontSize: '0.3467rem', lineHeight: '1', marginBottom: '0.4rem'}}>
				<Skeleton/>
			</div>
			<div style={{fontSize: "1.413rem", lineHeight: '1'}}>
				<Skeleton />
			</div>
		</div>
	)
}

const Banner = () => {
    return (
        <div>
            <div style={{fontSize: '4.73rem', lineHeight: '1'}}>
				<Skeleton/>
			</div>
        </div>
    )
}

const Activity = () => {
    return (
        <div>
            <div style={{fontSize: '4.73rem', lineHeight: '1', marginBottom: '0.2667rem'}}>
				<Skeleton />
			</div>
            <div style={{fontSize: '0.4267rem', lineHeight: '1', marginBottom: '0.2667rem'}}>
				<Skeleton/>
			</div>
            <div style={{fontSize: '12px', lineHeight: '1', marginBottom: '0.6667rem'}}>
				<Skeleton/>
			</div>
        </div>
    )    
}

const buildArr = (count) => {
    const arr = [];
    for(let i = 0; i < count; i++){
        arr.push(i);
    }
    return arr;
}

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false
        };

        this.arr = buildArr(props.count);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.ready){
            setTimeout(() => {
                this.setState({
                    ready: true
                })
            }, 1000)
        }
    }

    render() {

        if(this.state.ready){
            return (
                <CSSTransitionGroup
                    component="div"
                    transitionName={{
                        enter: `${styles['fade-enter']}`,
                        enterActive: `${styles['fade-enter-active']}`,
                        leave: `${styles['fade-leave']}`,
                        leaveActive: `${styles['fade-leave-active']}`,
                        appear: `${styles['fade-appear']}`,
                        appearActive: `${styles['fade-appear-active']}`
                    }}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                <div>
                    {this.props.children}
                </div>
                </CSSTransitionGroup>
            );
        }

        if(this.props.type === 'banner'){
            return <Banner />            
        }

        if(this.props.type === 'activity'){
            return(
                <div>
                    {
                        this.arr.map((item, index) => <Activity key={index} />)
                    }
                </div>
            )            
        }

        return(
            <div>
                {
                    this.arr.map((item, index) => <Item key={index} />)
                }
            </div>
        )
    }
}