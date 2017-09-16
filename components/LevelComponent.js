import React from 'react';
import {Button} from 'react-bootstrap';
import './styles/componentStyles.scss';

class LevelComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className='container' style={{borderBottom: 'solid 1px #ccc', padding: '5px 0px'}}>
				<form>
					<div className='row'>
						<div className='col-sm-3'>
							{this.props.level}
						</div>
						<div className='col-sm-3'>
							<span className='glyphicon glyphicon-ok' style={{color:'green'}}></span> &nbsp; Partial Proficiency <br />
							<span className='glyphicon glyphicon-time'></span> &nbsp; Full Proficiency
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default LevelComponent;