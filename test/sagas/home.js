import {call, put} from 'redux-saga/effects';
import {fetchOne} from '../../src/api/repositories';
import {fetchRepository, updateRepository} from '../../src/actions/home';
import {fetchRepositorySaga} from '../../src/sagas/home';



/**
 *
 */
describe('home sagas', function() {

	describe('fetchRepositorySaga', function() {

		/**
		 *
		 */
		it('should fetch and update the repository', function() {
			const owner = 'owner';
			const name = 'name';
			const repository = {
				owner,
				name
			};

			const action = fetchRepository(owner, name);
			const gen = fetchRepositorySaga(action);
			const first = gen.next();

			expect(first.value).to.deep.equal(
				call(fetchOne, owner, name)
			);

			const second = gen.next(repository);

			expect(second.value).to.deep.equal(
				put(updateRepository(repository))
			);
		});
	});
});
