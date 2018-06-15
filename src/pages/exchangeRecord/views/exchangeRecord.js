import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import style from './style.scss'
import {actions as loadingActions} from '@/common/loading'
import Selector from './selector.js'
import Item from './item.js'


const forge = require('node-forge');
const APP_KAY = ''

const sha1 = (value) => {
    const md = forge.md.sha1.create().update(value);
    return md.digest().toHex();
}

const createAuthKey = (username, access_token, userid) => {
    let uuid = localStorage.getItem('uuid');
    if(!uuid){uuid = ''};

    let signParams = [
        'page_size=10',
        'page_no=1',
        `uuid=${uuid}`,
        `user_name=${username}`,
        'openid=p2p_ios',
        '_type=json',
        `access_token=${access_token}`,
        `userId=${userid}`,
        `userid=${userid}`,
        'state=0',
        'buy_before_date=all'
    ];

    signParams = signParams.sort()

    let signParamsString = signParams.join('&');
    let signParamsAndAppkey = signParamsString + APP_KAY;

    const md = forge.md.md5.create();
    md.update(signParamsAndAppkey);
    const sign = md.digest().toHex();

    return 'sign='+ sign + '&' + 'sign_type=' + 'MD5&' + signParamsString;
}

const createRandomNumStr = (num) => {
    let str = num.toString().replace('0.', '');
    return str.substr(0, 6)
}


const styleFixed = {
    position: 'absolute',
    top: '50px',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'auto',
    padding: '4%'
}

class ExchangeRecord extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentTypeValue: 'all',
            currentTermValue: 'volvo',
            typeList: [
                { title: '全部', value: 'all' },
                { title: '充值', value: 'saab' },
                { title: '提现', value: 'opel' },
                { title: '购买', value: 'audi' },
                { title: '回款', value: 'huikuan' }
            ],
            termList: [
                { title: '近三天', value: 'saab' },
                { title: '近三星期', value: 'opel' },
                { title: '近三月', value: 'audi' },
                { title: '近三年', value: 'huikuan' }
            ],
            exchangeRecordlist: []
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.onUpdateHandle = this.onUpdateHandle.bind(this)

        this.onUpdateHandle()
    }

    componentDidMount() {
        const access_token = localStorage.getItem('token');
        const userid       = localStorage.getItem('userid');
        const salt         = createRandomNumStr(Math.random());
        let keyStr         = createAuthKey('15014095291', access_token, userid);

        axios.get('/my/p2p_record?' + keyStr)
        .then((response) => {
            if(response.status === 200){
                console.log(response)
			}
        })
        .catch((error) => {
		})
		.finally(() => {
  
		});	
    }

    onUpdateHandle() {
        const { currentTypeValue, currentTermValue } = this.state

        this.props.onShowLoading()
        const data = [
            { id: 1, type: 'audi', title: '购买一双鞋子' },
            { id: 2, type: 'opel', title: '提现了好多钱' },
            { id: 3, type: 'saab', title: '充值1万块' },
            { id: 4, type: 'huikuan', title: '疯狂回款' },
            { id: 5, type: 'audi', title: '购买一个冰箱' },
            { id: 6, type: 'audi', title: '购买一辆坦克' }
        ]

        const response = data.filter(function(item, index) {
            if(currentTypeValue === 'all'){
                return item
            }
            if(item.type === currentTypeValue){
                return item
            }
        })

        setTimeout(() => {
            this.setState({
                exchangeRecordlist: response
            }, () => {
                this.props.onHideLoading()
            })
        }, 2000)

        // 向后台发送请求 携带参数 得到数据后更新exchangeRecordlist
        // 发送请求的同时 显示loading
        // 请求回调中 隐藏loading
    }

    onChangeHandle(type, e) {
        switch(type){
            case 'type':
                    this.setState({
                        currentTypeValue: e.target.value
                    }, () => {
                        this.onUpdateHandle()
                    })
                break
            case 'term':
                    this.setState({
                        currentTermValue: e.target.value
                    }, () => {
                        this.onUpdateHandle()
                    })
                break
            default:
        }
    }

    render() {

        const { typeList, termList, exchangeRecordlist } = this.state

        return (
            <div>
                <div className={style.box}>
                    {/*记录类型*/}
                    <Selector 
                        list={typeList}
                        onChangeHandle={ (event) => this.onChangeHandle('type', event) }
                        initValue={this.state.currentTypeValue} />
                    {/*记录时间范围*/}
                    <Selector 
                        list={termList}
                        onChangeHandle={ (event) => this.onChangeHandle('term', event) }
                        initValue={this.state.currentTermValue} />
                </div>
    
                <div className={style.list} style={styleFixed}>
                    {
                        this.state.exchangeRecordlist.map(function(item, index) {
                            return <Item key={item.id} name={item.title} value={item.value} />;
                        })
                    }
                </div>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading())
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRecord)