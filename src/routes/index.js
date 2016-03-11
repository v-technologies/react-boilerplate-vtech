import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from './Home';



/**
 *
 */
const routes = (
	<Router history={browserHistory}>
		<Route path="/" name="home" component={Home} />
	</Router>
);



export default routes;
