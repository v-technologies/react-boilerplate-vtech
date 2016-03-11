import {UPDATE_REPOSITORY, updateRepository} from '../../src/actions/home';
import reducer from '../../src/reducers/home';



/**
 *
 */
describe('home reducer', function() {

	/**
	 *
	 */
	it(UPDATE_REPOSITORY, function() {
		const repository = {};
		const newRepository = {
			name: 'react-boilerplate-vtech'
		};

		const state = {
			repository
		};

		const action = updateRepository(newRepository);
		const newState = reducer(state, action);

		expect(newState).to.deep.equal({
			repository: newRepository
		});
	});
});
