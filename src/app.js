import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import ResidentList from '../components/pages/ResidentList';
import DiseaseList from '../components/pages/DiseaseList';
import LevelsList from '../components/pages/LevelsList';

import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

//Import reducers
import reducers from '../reducers/index'

import thunk from 'redux-thunk'

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //for debugging purpose
	middleware
);




const AppRoutes = () => (
		<div>
			<Route path="/" exact component={ResidentList} />
			<Route path="/diseases" component={DiseaseList} />
			<Route path="/levels" component={LevelsList} />
		</div>
	)

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<AppRoutes />			
		</BrowserRouter>
	</Provider>
)


ReactDOM.render(
	<App />,
	document.getElementById('app')
)