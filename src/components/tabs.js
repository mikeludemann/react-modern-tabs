import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
	state = {}

	render() {
		const { activeTab, handleTab, tabs } = this.props;
		return (
			<div className="tab-manager">
				{tabs.map(({ label, value }) => (
					<div
						className={`tab ${value === activeTab ? 'selected-tab' : ''}`}
						onClick={() => { handleTab(value); }}
					>
						{label}
					</div>
				))}
			</div>
		);
	}
}

Tabs.propTypes = {
	activeTab: PropTypes.number.isRequired,
	handleTab: PropTypes.func.isRequired,
	tabs: PropTypes.arrayOf(Object).isRequired,
};
