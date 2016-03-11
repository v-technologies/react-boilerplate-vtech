import {createStore, compose, applyMiddleware} from 'redux';
import {identity} from 'lodash';
import reducers from './reducers';
import sagas from './sagas';



/**
 *
 */
const shouldSetupDevTools = (
	process.env.NODE_ENV !== 'production'
	&& window.devToolsExtension
);

const devToolsMiddleware = shouldSetupDevTools
	? window.devToolsExtension()
	: identity;

const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagas),
		devToolsMiddleware
	)
);



export default store;
