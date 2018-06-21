import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import service_icon from './images/service_icon.png';
import checkbox_ok from './images/checkbox_icon_ok.png';
import checkbox_no from './images/checkbox_icon_no.png';
import circle_ok from './images/circle_check_icon_ok.png';
import circle_no from './images/circle_check_icon_no.png';
import arrow_icon from '@/common/images/arrow_icon.png';

import commonStyles from '@/common/css/styles.scss';
import styles from './style.scss'


const Coupon = () => (
    <div className={ styles.coupon }>
        <div className={ styles.coupon_aside }>
            <div className={ styles.coupon_amount }>￥15000</div>
            <div className={ styles.coupon_condition }>满20000元可用</div>
        </div>
        <div className={ styles.coupon_main }>
            <div className={ styles.coupon_hd }>
                <span className={ styles.coupon_title }>代金券</span>
                <span className={ styles.coupon_badge }>今天过期</span>
            </div>
            <div className={ styles.coupon_bd }>
                <div>投资期限=30天或60天</div>
                <div>除极计划外其余产品可用</div>
            </div>
            <div className={ styles.coupon_ft }>
                <span className={ styles.coupon_expire }>
                有效期至 2018-12-31
                </span>
            </div>
        </div>
    </div>
)

export default class extends Component {

    constructor(props) {
        super(props);

    }

    selectHandle = (index) => {

    }

    render() {

        return (
            <div>
                <Tabs defaultIndex={ 0 } onSelect={ this.selectHandle }>
                    <div className={ styles.nav }>
                        <TabList className={ styles.list } >
                            <Tab className={ styles.tab } selectedClassName={ styles.selected }>代金券</Tab>
                            <Tab className={ styles.tab } selectedClassName={ styles.selected }>加息券</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <Tabs defaultIndex={ 0 } onSelect={ this.selectHandle }>
                            <TabList className={ styles.list }>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>未使用</Tab>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>已使用</Tab>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>已过期</Tab>
                            </TabList>

                            <div className={ styles.panel }>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                            </div>

                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs defaultIndex={ 0 } onSelect={ this.selectHandle }>
                            <TabList className={ styles.list }>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>未使用</Tab>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>已使用</Tab>
                                <Tab className={ styles.tabState } selectedClassName={ styles.selectedState }>已过期</Tab>
                            </TabList>
                            <div className={ styles.panel }>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                                <TabPanel>
                                    <Coupon />
                                    <Coupon />
                                </TabPanel>
                            </div>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}