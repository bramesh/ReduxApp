import React from 'react';

import {connect} from 'react-redux';

import {Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import LevelsList from '../LevelsList';

class DiseaseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			diseases: false,
			levelsList: false,
			diseaseListClassName: ''
		}
	}

	componentWillReceiveProps() {
		this.setState({
			diseases: true
		})
	}

	handleClick(level) {
		this.setState({
			levelsList: true,
			diseaseListClassName: 'hideDiseaseList'
		})
	}

	showLinks() {
		const toggleList = () => {
			this.setState({
				levelsList: false,
				diseaseListClassName: ''
			})
		}
		if(this.state.levelsList) {
			return <a href='#' onClick={toggleList}>Go to DiseaseList</a>
		} else {
			return <NavLink to='/'>Go to Residents</NavLink>
		}
	}

	createItems() {
		if(this.state.diseases) {
			const diseases = this.props.diseases.diseases;
			if(diseases && Object.keys(diseases).length) {
				return diseases.map(function(disease) {
					return(
						<button type='button' key={disease.diseaseName} 
							className={`list-group-item ${this.state.diseaseListClassName}`} 
							style={{outline: 'none'}}
							onClick={this.handleClick.bind(this)}>
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
		const links = null || this.showLinks();
		const ShowList = () => (
			<Grid>
				{links}
				<ListGroup>
					{showDiseases}
				</ListGroup>
				<LevelsList display={this.state.levelsList} />
			</Grid>
		)
		return(
			<ShowList />
		)
	}
}

function mapStateToProps(state) {
	return {
		diseases: state.diseases
	}
}

export default connect(mapStateToProps)(DiseaseList);