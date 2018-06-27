import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                <CSSTransition
                    in={ this.state.ready }
                    classNames="fade"
                    appear={ true }
                    timeout={ 500 }
                >
                    <div>
                        { this.props.children }
                    </div>
                </CSSTransition>
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