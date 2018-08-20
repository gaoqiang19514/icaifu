import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';
import 'boxicons';

import styles from './style.scss';

import eyeOpenSrc from './images/eye_open_icon.png'
import eyeCloseSrc from './images/eye_close_icon.png'
import clearBtnSrc from './images/clear_icon.png'

import { LayoutPrimaryBox, LayoutSecondBox, LayoutBoxBet, LayoutBoxWrap, input, button } from '@/common/commonStyled';


const LayoutRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 0.4rem;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const StyleVEyeIcon = styled.span`
    cursor: pointer;
    position: absolute;
    top: 0.4667rem;
    right: 0;
    width: 0.56rem;
    height: 0.4267rem;
    background: url(${ props => props.open ? eyeOpenSrc : eyeCloseSrc }) no-repeat center center;
    background-size: cover;
`;

const StyleInput = input.extend`
    color: #fff;
    width: 100%;
    font-size: 0.4rem;
    border-radius: 0;
    padding: 0.3333rem 0 0.3333rem 0.3333rem;
    background: transparent;
    height: auto;
    line-height: 0.7467rem;
`;

const StyleButton = button.extend`
    width: 100%;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: .2em;

    color: ${ props => props.primary ? "#333" : "#ccc"};
    background-color: ${ props => props.primary ? '#fff' : '#ececec96' };
    box-shadow: ${ props => props.primary ? '0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75)' : 'none' };
`;

const StyleClearIcon = styled.span`
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0.4667rem;
    right: 0;
    width: 0.4533rem;
    height: 0.4533rem;
    background: url(${clearBtnSrc}) no-repeat center center;
    background-size: cover;
`;

const StyleClearIconPswd = StyleClearIcon.extend`
    right: 1.3333rem;
`;

const StyleLink = styled(Link)`
    color: #fff;
`;

export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            phone: '',
            pswd: '',
            pswdViewState: false,
            submitFlag: false
        }

        this.onUsernameChangeHandle = this.onChangeHandle.bind(this, 'username')
        this.onPasswordChangeHandle = this.onChangeHandle.bind(this, 'password')

        this.onUsernameClearHandle = this.onclearHandle.bind(this, 'username')
        this.onPasswordClearHandle = this.onclearHandle.bind(this, 'password')
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLoginHandle('15014095291', '332881532');
    }

    onclearHandle = (type, e) => {
        if(type === 'username'){
            this.usernameInput.value = ''
            this.usernameBtn.style.display = 'none'
        }else if(type === 'password'){
            this.passwordInput.value = ''
            this.passwordBtn.style.display = 'none'
        }
    }

    togglePswd = () => {
        this.setState({
            pswdViewState: !this.state.pswdViewState
        }, () => {
            this.state.pswdViewState  ? this.passwordInput.type = 'text' : this.passwordInput.type = 'password'
        });
    }

    checkVlidate = () => {
        const { phone, pswd } = this.state

        if(phone && phone.length === 11 && pswd && pswd.length >= 6){
            this.setState({ submitFlag: true })
        }else{
            this.setState({ submitFlag: false })
        }
    }

    onChangeHandle = (type, e) => {
        const val = e.target.value.trim()

        if(type === 'username'){
            this.setState({ phone: val }, this.checkVlidate)
            if(val.length > 0){
                this.usernameBtn.style.display = 'block'
            }else{
                this.usernameBtn.style.display = 'none'
            }
        }else if(type === 'password'){
            this.setState({ pswd: val }, this.checkVlidate)
            if(val.length > 0){
                this.passwordBtn.style.display = 'block'
            }else{
                this.passwordBtn.style.display = 'none'
            }
        }
    }

    render() {

        return(
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <div>
                        <div>
                            <LayoutRow>
                                <box-icon name='user' color="#fff"></box-icon>
                                <StyleInput type="text" value={ this.state.phone } onChange={ this.onUsernameChangeHandle } innerRef={ input => this.usernameInput = input } placeholder="请输入手机号/用户名" />
                                <StyleClearIcon innerRef={ btn => this.usernameBtn = btn } onClick={ this.onUsernameClearHandle }/>
                            </LayoutRow>
                        </div>
                        <div>
                            <LayoutRow>
                                <box-icon name='lock' color="#fff"></box-icon>
                                <StyleInput type="password" value={ this.state.pswd } onChange={ this.onPasswordChangeHandle } innerRef={ input => this.passwordInput = input } placeholder="请输入您的密码" />
                                <StyleClearIconPswd innerRef={ input => this.passwordBtn = input } onClick={ this.onPasswordClearHandle }/>
                                { this.state.pswdViewState ? <StyleVEyeIcon open onClick={ this.togglePswd }/> : <StyleVEyeIcon onClick={ this.togglePswd }/> }
                            </LayoutRow>
                        </div>
                    </div>
                    <LayoutPrimaryBox>
                        <LayoutBoxBet>
                            <StyleLink to="/forgetPassword">忘记密码？</StyleLink>
                            <StyleLink to="/register">新用户注册</StyleLink>
                        </LayoutBoxBet>
                    </LayoutPrimaryBox>
                </div>

                <LayoutPrimaryBox>
                    { this.state.submitFlag ? <StyleButton type="submit" primary>登录</StyleButton> : <StyleButton disabled>登录</StyleButton> }
                </LayoutPrimaryBox>
            </form>
        )
    }
}