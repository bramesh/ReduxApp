export function residentReducer (state={residents:[]}, action) {
	switch(action.type) {
		case 'GET_RESIDENTS':
		return {residents:[...state, ...action.payload]}
		break;
	}
	return state;
}