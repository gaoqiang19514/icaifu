import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => (
    <div className={style.info}>
        <section>
            <ul>
                <li>
                    <span>投资期限</span>
                    <span>30天</span>
                </li>
                <li>
                    <span>还款方式</span>
                    <span>到期还本付息</span>
                </li>
                <li>
                    <span>保障方式</span>
                    <span>第三方机构担保</span>
                </li>
                <li>
                    <span>剩余时间</span>
                    <span>03天18时40分28秒</span>
                </li>
            </ul>
        </section>

        <section>
            <dl>
                <dt>借款人信息</dt>
                <dd>
                    <ul>
                        <li>
                            <span>投资期限</span>
                            <span>30天</span>
                        </li>
                        <li>
                            <span>还款方式</span>
                            <span>到期还本付息</span>
                        </li>
                        <li>
                            <span>保障方式</span>
                            <span>第三方机构担保</span>
                        </li>
                        <li>
                            <span>剩余时间</span>
                            <span>03天18时40分28秒</span>
                        </li>
                    </ul>
                </dd>
            </dl>
        </section>

        <section>
            <dl>
                <dt>审核信息</dt>
                <dd>
                    <ul>
                        <li>
                            <span>投资期限</span>
                            <span>30天</span>
                        </li>
                        <li>
                            <span>还款方式</span>
                            <span>到期还本付息</span>
                        </li>
                        <li>
                            <span>保障方式</span>
                            <span>第三方机构担保</span>
                        </li>
                        <li>
                            <span>剩余时间</span>
                            <span>03天18时40分28秒</span>
                        </li>
                    </ul>
                </dd>
            </dl>
        </section>
        
        <div>
            <div className={style.siblings}>&nbsp;</div>
            <div className={style.fixed}>
                <Link className="btn" to="/buy/1">立即投资</Link>
            </div>
        </div>
    </div>
)