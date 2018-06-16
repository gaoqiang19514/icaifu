import React from 'react';

import style from './style.scss';

const titleStyle = {
    fontSize: '0.4rem'
}

const itemTitleStyle = {
    fontSize: '0.3467rem',
    fontWeight: 'bold',
    marginBottom: '0.16rem'
}

const clearMargin = {
    margin: 0
}

const textStyle = {
    ...clearMargin,
    lineHeight: '0.4rem',
    color: '#a8acb3',
    fontSize: '0.2933rem'
}

const itemStyle = {
    flex: '1',
    textAlign: 'center'
}

const iconStyle = {
    margin: '0 auto 0.4rem auto',
    width: '1.8133rem',
    height: '1.8133rem'
}

export default () => (
    <div className={style.l_section} style={{background: '#fff'}}>
        <div className={style.l_section_hd}>
            <h2 style={titleStyle}>为什么选择i财富</h2>
        </div>
        <div className={style.l_section_bd}>
            <div className="flex flex--between">
                <a href="" style={itemStyle}>
                    <div style={iconStyle}>
                        <img src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt=""/>
                    </div>
                    <dl style={{margin: 0}}>
                        <dt style={itemTitleStyle}>安全保障</dt>
                        <dd style={textStyle}>安全等保3级</dd>
                        <dd style={textStyle}>历史出借安全回款</dd>
                    </dl>
                </a>
                <a href="" style={itemStyle}>
                    <div style={iconStyle}>
                        <img src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt=""/>
                    </div>
                    <dl style={{margin: 0}}>
                        <dt style={itemTitleStyle}>央企入股</dt>
                        <dd style={textStyle}>三大央企战略入股</dd>
                        <dd style={textStyle}>恒信集团控股平台</dd>
                    </dl>
                </a>
                <a href="" style={itemStyle}>
                    <div style={iconStyle}>
                        <img src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt=""/>
                    </div>
                    <dl style={{margin: 0}}>
                        <dt style={itemTitleStyle}>银行存管</dt>
                        <dd style={textStyle}>与上海银行联手</dd>
                        <dd style={textStyle}>实现资金存管</dd>
                    </dl>
                </a>
            </div>
        </div>
    </div>
)