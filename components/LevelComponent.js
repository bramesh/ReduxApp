import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import './styles/componentStyles.scss';

function LevelComponent(props) {
	const level = props.level;
	const proficiency = () => {
		const proficiencyLevel = props.proficiency;
		if(proficiencyLevel === '2') {
			return (
				<span>
					<span className='glyphicon glyphicon-ok' style={{color:'green'}}></span> &nbsp; Full Proficiency
				</span>
			)
		} else {
			return (
				<span>
					<span className='glyphicon glyphicon-time' style={{color:'red'}}></span> &nbsp; Partial Proficiency
				</span>
			)
		}
	}
	return(
		<div className='container' style={{borderBottom: 'solid 1px #ccc', padding: '5px 0px'}}>
			<a href='#'>
				<div className='row'>
					<div className='col-sm-3'>
						{level}
					</div>
					<div className='col-sm-3'>
						{proficiency()}
						<span className='pull-right'>
							<Glyphicon glyph="chevron-right" />
						</span>
					</div>
				</div>
			</a>
		</div>
	)
}

export default LevelComponent;