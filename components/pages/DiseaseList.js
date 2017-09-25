import React from 'react';

import {connect} from 'react-redux';

import {Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import LevelsList from '../LevelsList';
import LevelComponent from '../LevelComponent';

class DiseaseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			diseases: false,
			diseaseListClassName: '',
			diseaseId: null,
			levels: [],
			showLevels: 'hideLevelsList'
		}
	}

	componentWillReceiveProps() {
		this.setState({
			diseases: true
		})
	}
	
	/*Navigation Links*/
	showLinks() {
		const toggleList = () => {
			this.setState({
				diseaseListClassName: '',
				showLevels: 'hideLevelsList'
			})
		}
		if(this.state.showLevels === 'displayLevelsList') {
			return <a href='#' onClick={toggleList}>Go to DiseaseList</a>
		} else {
			return <NavLink to='/'>Go to Residents</NavLink>
		}
	}

	createDiseaseList() {
		if(this.state.diseases) {
			const diseases = this.props.diseases.diseases;
			if(diseases && Object.keys(diseases).length) {
				return diseases.map(function(disease) {
					return(
						<button type='button' key={disease.diseaseName} 
							className={`list-group-item ${this.state.diseaseListClassName}`} 
							style={{outline: 'none'}}
							onClick={this.levelsList.bind(this, disease.diseaseId)}>
								{disease.diseaseName}
								<span className='pull-right'>									
									Level {disease.currentLevel}
									&nbsp;&nbsp;&nbsp;
									<Glyphicon glyph="chevron-right" />									
								</span>
						</button>
					)
				}, this)
			}
		}
	}
	

	levelsList(diseaseId) {
		if(diseaseId) {
			const diseases = this.props.diseases.diseases;
			const levels = []
			let currentDisease = {};
			diseases.map(function(disease) {
				if(disease.diseaseId === diseaseId) {
					currentDisease = disease;
				}
			});
			currentDisease.levels.map((level) => {
				return levels.push(<LevelComponent key={level.level} level={level.level} proficiency={level.proficiency} />)
			})
			this.setState({
				diseaseListClassName: 'hideDiseaseList',
				diseaseId: diseaseId,
				levels: levels,
				showLevels: 'displayLevelsList'
			})
		}
	}

	render() {
		const showDiseases = null || this.createDiseaseList();
		const links = null || this.showLinks();
		const ShowList = () => (
			<Grid>
				{links}
				<ListGroup>
					{showDiseases}
				</ListGroup>
				<div className={this.state.showLevels}>
					{this.state.levels}
				</div>
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