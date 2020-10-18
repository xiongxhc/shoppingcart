import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Routes from './routes';
import store from './store/store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root')
);