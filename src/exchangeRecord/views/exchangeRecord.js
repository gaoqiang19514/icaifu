import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios'

import style from './style.scss'

import Item from './item.js'



class ExchangeRecord extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentType: "全部",
            currentDate: "近三天",
            viewTypes: false,
            viewDates: false,
            list: []
        }

        this.selectType = this.selectType.bind(this)
        this.chooseType = this.chooseType.bind(this)

        this.selectDate = this.selectDate.bind(this)
        this.chooseDate = this.chooseDate.bind(this)
    }

    componentDidMount() {
        const token = ''
        const that = this

        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            config.headers.Authorization = `token ${that.props.token}`;
            return config;
          }, function (error) {
            // Do something with request error
            return Promise.reject(error);
          });


        axios.get('/users')
          .then(function (response) {
            if(response.status === 200){
                that.setState({
                    list: response.data
                })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
         
    }

    selectType() {
        this.setState({
            viewTypes: !this.state.viewTypes
        })
    }

    chooseType(e) {
        const typeText = e.target.innerHTML

        this.setState({
            currentType: typeText
        })

        this.setState({
            viewTypes: !this.state.viewTypes
        })
    }

    selectDate() {
        this.setState({
            viewDates: !this.state.viewDates
        })
    }

    chooseDate(e) {
        const DateText = e.target.innerHTML

        this.setState({
            currentDate: DateText
        })

        this.setState({
            viewDates: !this.state.viewDates
        })
    }

    render() {

        let typeDisplayStyle = this.state.viewTypes === true ? {display: "block"} : {display: "none"}
        let dateDisplayStyle = this.state.viewDates === true ? {display: "block"} : {display: "none"}

        console.log(this.state.list)

        return (
            <div>
                <div className={style.nav}>
                    <div className={style.cell}>
                        <span className={style.current} onClick={this.selectType}>{this.state.currentType}</span>
                        <div onClick={this.chooseType} className={style.inner} style={typeDisplayStyle}>
                            <div>全部</div>
                            <div>充值</div>
                            <div>提现</div>
                            <div>购买</div>
                            <div>回款</div>
                        </div>
                    </div>
                    <div className={style.cell}>
                        <span className={style.current} onClick={this.selectDate}>{this.state.currentDate}</span>
                        <div onClick={this.chooseDate} className={style.inner} style={dateDisplayStyle}>
                            <div>近三天</div>
                            <div>近三星期</div>
                            <div>近三月</div>
                            <div>近三年</div>
                        </div>
                    </div>
                </div>
    
                <div className={style.list}>
                    {
                        this.state.list.map(function(item, index) {
                            return <Item key={item.id} name={item.name} />;
                        })
                    }
                </div>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRecord)