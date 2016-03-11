import React from 'react';
import {intlShape} from 'react-intl';
import Helmet from 'react-helmet';
import HomeContainer from '../components/HomeContainer';



/**
 *
 */
export default function Home(_, {intl}) {
	const title = intl.formatMessage({
		id: 'page.home.title'
	});

	return (
		<div>
			<Helmet title={title} />
			<HomeContainer />
		</div>
	);
}

Home.contextTypes = {
	intl: intlShape
};
