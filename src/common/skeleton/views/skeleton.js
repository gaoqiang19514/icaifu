import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

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
            return this.props.children;
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