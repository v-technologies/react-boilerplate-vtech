import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import routes from './routes';
import store from './store';
import messages from './messages/en';



/**
 *
 */
const app = (
	<Provider store={store}>
		<IntlProvider locale="en" messages={messages}>
			{routes}
		</IntlProvider>
	</Provider>
);



render(app, document.getElementById('app'));
