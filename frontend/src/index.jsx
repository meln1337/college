import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';

const app =
	<Provider store={store}>
		<BrowserRouter >
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter >
	</Provider>;

ReactDOM.render(
	app,
	document.getElementById('root')
);


serviceWorker.unregister();
