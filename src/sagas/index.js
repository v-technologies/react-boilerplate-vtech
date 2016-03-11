import createSagaMiddleware from 'redux-saga';
import {watchFetchRepository} from './home';



/**
 *
 */
const sagas = createSagaMiddleware(
	watchFetchRepository
);



export default sagas;
