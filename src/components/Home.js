import React, {Component, PropTypes} from 'react';
import {repositoryShape} from '../api/repositories';
import Repository from './Repository';



/**
 *
 */
export default class Home extends Component {

	static propTypes = {
		fetchRepository: PropTypes.func.isRequired,
		repository: repositoryShape
	};

	componentDidMount() {
		this.props.fetchRepository(
			'v-technologies',
			'react-boilerplate-vtech'
		);
	}

	render() {
		const {repository} = this.props;

		return repository
			? <Repository repository={repository} />
			: <noscript />;
	}
}
