import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import './styles/componentStyles.scss';

class LevelComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	showLevel(level) {
		console.log(level)
	}
	
	render() {
		const level = this.props.level;
		return(
			<div className='container' style={{borderBottom: 'solid 1px #ccc', padding: '5px 0px'}}>
				<a href='#' onClick={this.showLevel.bind(this, level)}>
					<div className='row'>
						<div className='col-sm-3'>
							{level}
						</div>
						<div className='col-sm-3'>
							<span className='glyphicon glyphicon-ok' style={{color:'green'}}></span> &nbsp; Partial Proficiency <br />
							<span className='glyphicon glyphicon-time' style={{color:'red'}}></span> &nbsp; Full Proficiency
							<span className='pull-right'>
								<Glyphicon glyph="chevron-right" />
							</span>
						</div>
					</div>
				</a>
			</div>
		)
	}
}

export default LevelComponent;