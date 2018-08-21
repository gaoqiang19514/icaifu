import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import styled from 'styled-components'

const LayoutLayer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const LayoutWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0.4rem;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    background: rgba(0, 0, 0, .3);
`;

const StyleLoading = {
    width: '.8rem',
    height: '.8rem'
}

const Loading = ({ show }) => {
    const displayStyle = show === true ? { display: "block" } : { display: "none" }

    return (
        <LayoutLayer style={ displayStyle }>
            <LayoutWrap>
                <ReactLoading type="spin" style={ StyleLoading }/>
            </LayoutWrap>
        </LayoutLayer>
    )
}

const mapStateToProps = (state) => {
    return {
        show: state.loading
    }
}

export default connect(mapStateToProps)(Loading)