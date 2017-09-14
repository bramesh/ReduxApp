export function diseaseReducer (state={}, action) {
	switch(action.type) {
		case 'GET_DISEASES':
		return action.payload[0]
		break;
	}
	return state;
}