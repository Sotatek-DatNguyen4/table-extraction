import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface IProps {
	title?: React.ReactNode;
	leftSider?: React.ReactNode;
	content?: React.ReactNode;
	rightSider?: React.ReactNode;
	className?: string;
}

class Container extends Component<IProps> {
	static propTypes = {
		title: PropTypes.any,
		leftSider: PropTypes.any,
		content: PropTypes.any,
		rightSider: PropTypes.any,
		className: PropTypes.string,
	};

	static defaultProps = {
		className: 'rde-content-layout-main',
	};

	render() {
		const { title, leftSider, content, rightSider, className, children } = this.props;
		return (
			<div className="rde-content-layout">
				{title}
				{/* <div
					style={{
						// overflowY: 'auto',
						// overflowX: 'hidden',
						// minHeight: `calc(100vh - ${title ? 38 : 60}px)`,
						// height: `calc(100vh - ${title ? 38 : 60}px)`,
					}}
					className={className}
				>
					
				</div> */}
				{leftSider}
				{content || children}
				{rightSider}
			</div>
		);
	}
}

export default Container;
