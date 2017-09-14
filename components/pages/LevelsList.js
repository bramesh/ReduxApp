import React from 'react';

import {connect} from 'react-redux';

class LevelsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {diseases:[]}
	}
	
	render() {
		console.log(this.props.diseases.diseases)
		return(
			<h1>Hello</h1>
		)
	}
}

function mapStateToProps(state) {
	return {
		diseases: state.diseases
	}
}

export default connect(mapStateToProps)(LevelsList);