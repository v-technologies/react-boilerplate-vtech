import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_REPOSITORY, updateRepository} from '../actions/home';
import {fetchOne} from '../api/repositories';



/**
 *
 */
export function* fetchRepositorySaga(action) {
	const {owner, name} = action.payload;
	const repository = yield call(fetchOne, owner, name);

	yield put(updateRepository(repository));
}

/**
 *
 */
export function* watchFetchRepository() {
	yield* takeLatest(FETCH_REPOSITORY, fetchRepositorySaga);
}
