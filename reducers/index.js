import {combineReducers} from 'redux';

import {residentReducer} from './residentReducer';
import {diseaseReducer} from './diseaseReducer';

export default combineReducers({
	residents: residentReducer,
	diseases: diseaseReducer
})