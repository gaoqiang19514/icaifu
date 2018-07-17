import React, { Component } from 'react';
import { Modal } from 'antd-mobile';

import Navigator from './navigator.js';
import Profile from './profile.js';
import Menu from '@/common/menu/';

const alert = Modal.alert;

function closest(el, selector) {
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}

export default class extends Component {
	state = {
		modal: true
	};
	
	closeModal = () => {
		this.setState({ modal: false });
		alert('Delete', 'Are you sure???', [
			{ text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
			{ text: 'OK', onPress: () => console.log('ok') },
		]);
	}

	onWrapTouchStart = (e) => {
		// fix touch to scroll background page on iOS
		if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
			return;
		}
		const pNode = closest(e.target, '.am-modal-content');
		if (!pNode) {
			e.preventDefault();
		}
	}
	
	render() {
		return (
			<div>
				<Profile />
				<Navigator />

				<Modal
					visible={ this.state.modal }
					transparent
					maskClosable={ false }
					onClose={ this.closeModal }
					title="Title"
					footer={ [
						{ text: 'Ok', onPress: () => { this.closeModal(); } }
					] }
					wrapProps={{ onTouchStart: this.onWrapTouchStart }}
				>
					<div style={{ height: 100, overflow: 'scroll' }}>
						scoll content...<br />
						scoll content...<br />
						scoll content...<br />
						scoll content...<br />
						scoll content...<br />
						scoll content...<br />
					</div>
				</Modal>
				<Menu />
			</div>
		)
	}
}

