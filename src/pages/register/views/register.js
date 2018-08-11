import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import isMobilePhone from 'validator/lib/isMobilePhone'
import styled from 'styled-components'
import { Button } from 'antd-mobile';

import { LayoutPrimaryBox, LayoutFlexBox, StyleBg, StyleReactLoading } from '@/common/commonStyled';

const StyleInput = styled.input`
    border: 0;
    outline: none;
    font-size: 0.8rem;
    padding: 0.2667rem;
    width: 100%;
`;

const status = {
    index: 1,
    statuses: ['phone', 'verify', 'pswd'],
    next: () => {
        if(status.index % status.statuses.length === 0){
            return null
        }
        return status.statuses[status.index++]
    }
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'phone',
    
            phoneDisabled: true,
            verifyDisabled: true,
            pswdDisabled: true,
            
            phone: '',
            verifyCode: '',
            pswd: '',
            repswd: ''
        }

        this.phoneOnChangeHandle  = this.onChangeHandle.bind(this, 'phone')
        this.verifyOnChangeHandle = this.onChangeHandle.bind(this, 'verify')
        this.pswdOnChangeHandle   = this.onChangeHandle.bind(this, 'pswd')
        this.repswdOnChangeHandle = this.onChangeHandle.bind(this, 'repswd')
    }

    componentDidMount() {
        document.body.className = 'login';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    checkPswd = () => {
        if(this.state.pswd && (this.state.pswd === this.state.repswd)){
            this.setState({ pswdDisabled: false })
        }else{
            this.setState({ pswdDisabled: true })
        }
    }

    onChangeHandle = (type, e) => {
        switch(type){
            case 'phone':
                this.setState({ phone: e.target.value.replace(/\D/g, '') }, () => {
                    if(isMobilePhone(this.state.phone, ['zh-CN'])){
                        this.setState({ phoneDisabled: false })
                    }else{
                        this.setState({ phoneDisabled: true })
                    }
                })
                break;
            case 'verify':
                this.setState({ verifyCode: e.target.value }, () => {
                    if(this.state.verifyCode){
                        this.setState({ verifyDisabled: false })
                    }else{
                        this.setState({ verifyDisabled: true })
                    }
                })
                break;
            case 'pswd':
                this.setState({ pswd: e.target.value }, () => {
                    this.checkPswd()
                })
                break;
            case 'repswd':
                this.setState({ repswd: e.target.value }, () => {
                    this.checkPswd()
                })
                break;
            default:
        }
    }

    onNextStepHandle = () => {
        if(this.state.phoneDisabled){ return false }

        const state = status.next()
        if(state){
            this.setState({ status: state})
        }else{
            // 处理提交密码的逻辑
            alert('注册成功')
            this.props.history.push('/login')
        }
    }

    render() {
        const { phoneDisabled, verifyDisabled, pswdDisabled } = this.state

        if(this.state.status === 'verify'){
            return <div>
                <LayoutPrimaryBox>
                    <div>请输入验证码</div>
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <StyleInput onChange={ this.verifyOnChangeHandle } type="text" value={ this.state.verifyCode } placeholder="请输入验证码" />
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <Button disabled={ verifyDisabled } onClick={ this.onNextStepHandle }>确认</Button>
                </LayoutPrimaryBox>
            </div>
        }

        if(this.state.status === 'pswd'){
            return <div>
                <LayoutPrimaryBox>
                    <div>请输入密码</div>
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <StyleInput onChange={ this.pswdOnChangeHandle } type="password" value={ this.state.pswd } placeholder="请输入登录密码" />
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <div>请确认密码</div>
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <StyleInput onChange={ this.repswdOnChangeHandle } type="password" value={ this.state.repswd } placeholder="请确认登录密码" />
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <Button disabled={ pswdDisabled } onClick={ this.onNextStepHandle }>确认</Button>
                </LayoutPrimaryBox>
            </div>
        }

        return (
            <div>
                <LayoutPrimaryBox>
                    <StyleInput onChange={ this.phoneOnChangeHandle } type="text" value={ this.state.phone } placeholder="请输入手机号" />
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    我已阅读并同意<a href="/h5/user/help/users.shtml">《服务协议》</a>和<a href="/h5/user/help/creditor.shtml">《隐私条款》</a>
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    <Button disabled={ phoneDisabled } onClick={ this.onNextStepHandle }>下一步</Button>
                </LayoutPrimaryBox>
                <LayoutPrimaryBox>
                    已有账号？<Link to="/login">去登录</Link>
                </LayoutPrimaryBox>
            </div>
        )
    }
}