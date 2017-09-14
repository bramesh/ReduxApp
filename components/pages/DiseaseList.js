import React from 'react';

import {connect} from 'react-redux';

import {Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

class DiseaseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {diseases: false}
	}

	componentWillReceiveProps() {
		this.setState({
			diseases: true
		})
	}

	handleClick(level) {
		console.log('level')
	}

	createItems() {
		if(this.state.diseases) {
			const diseases = this.props.diseases.diseases;
			if(diseases && Object.keys(diseases).length) {
				return diseases.map(function(disease) {
					return(
						<button type='button' key={disease.diseaseName} className='list-group-item' style={{outline: 'none'}} onClick={this.handleClick.bind(this)}>
							{disease.diseaseName}
							<span className='pull-right'>									
								Level {disease.level}
								&nbsp;&nbsp;&nbsp;
								<Glyphicon glyph="chevron-right" />									
							</span>
						</button>
					)
				}, this)
			}
		}
	}

	render() {
		const showDiseases = null || this.createItems();
		return(
			<Grid>
				<NavLink to='/'>Go to Residents</NavLink>
				<span className='pull-right'>
					<NavLink to='/levels'>Go to Levels list</NavLink>
				</span>
				<ListGroup>
					{showDiseases}
				</ListGroup>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		diseases: state.diseases
	}
}

export default connect(mapStateToProps)(DiseaseList);