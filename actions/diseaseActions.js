import axios from 'axios';

export function getDiseases(diseaseId) {
	return function(dispatch) {
		axios.get('/residents/' + diseaseId)
			.then(function(response) {
				dispatch({
					type: 'GET_DISEASES',
					payload: response.data
				})
			})
			.catch(function(err) {
				dispatch({type: 'GET_DISEASES_ERROR', payload: err})
			})
	}
}