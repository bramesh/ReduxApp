import React from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {getResidents} from '../../actions/residentActions'
import {getDiseases} from '../../actions/diseaseActions'

import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

class ResidentList extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getResidents()
	}

	handleResident(id) {
		this.props.getDiseases(id);
		this.props.history.push('/diseases')
	}

	render() {
		const residents = this.props.residents;
		const showResidents = residents.map(function(resident) {
			return(
				<ListGroupItem style={{outline: 'none'}} key={resident.residentId} onClick={this.handleResident.bind(this, resident.residentId)}>
					{resident.residentName}
				</ListGroupItem>
			)
		}, this)
		return(
			<Grid>
				<ListGroup>
					{showResidents}
				</ListGroup>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		residents: state.residents.residents
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getResidents,
		getDiseases
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResidentList);