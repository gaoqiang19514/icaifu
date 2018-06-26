import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.div`
    font-size: 0.3467rem;
    font-weight: bold;
    margin-bottom: 0.16rem;
`;

const Text = styled.div`
    line-height: 0.4rem;
    color: #a8acb3;
    font-size: 0.2933rem;
`;

const Item = styled.a`
    flex: 1;
    text-align: center;
`;

const Icon = styled.img`
    margin: 0 auto 0.4rem auto;
    width: 1.8133rem;
    height: 1.8133rem;
`;

const Title = styled.h2`
    font-size: 0.4rem;
`;

const Box = styled.div`
    padding: 0.4rem;
`;

const Box2 = styled.div`
    margin-bottom: 0.2667rem;
    background: #fff;
`;

export default () => (
    <Box2>
        <Box>
            <Title>为什么选择i财富</Title>
        </Box>
        <Box>
            <div className="flex flex--between">
                <Item href="">
                    <Icon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <div>
                        <SubTitle>安全保障</SubTitle>
                        <Text>安全等保3级</Text>
                        <Text>历史出借安全回款</Text>
                    </div>
                </Item>
                <Item href="">
                    <Icon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <div>
                        <SubTitle>央企入股</SubTitle>
                        <Text>央企战略入股</Text>
                        <Text>恒信集团控股平台</Text>
                    </div>
                </Item>
                <Item href="">
                    <Icon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <div>
                        <SubTitle>银行存管</SubTitle>
                        <Text>与上饶银行联手</Text>
                        <Text>实现资金存管</Text>
                    </div>
                </Item>
            </div>
        </Box>
    </Box2>
)