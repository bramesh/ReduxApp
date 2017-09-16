import React from 'react';
import classnames from 'classnames';
import LevelComponent from './LevelComponent';

const defaultProps = {
	display: false
}

class LevelsList extends React.Component {
	constructor(props) {
		super(props);
	}

	getLevels() {
		
	}
	
	render() {
		const {display, ...others} = this.props;
		const customClassNames = classnames(
				{
					displayLevelsList: display
				},
				'levelsList'
			)
		return(
			<div className={customClassNames}>
				<h3>{this.props.diseaseLevel}</h3>
				<LevelComponent level={1} />
				<LevelComponent level={2} />
				<LevelComponent level={3} />
				<LevelComponent level={4} />
				<LevelComponent level={5} />
			</div>
		)
	}
}

LevelsList.defaultProps = defaultProps;
export default LevelsList;