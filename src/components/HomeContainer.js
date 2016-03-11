import {connect} from 'react-redux';
import {property} from 'lodash';
import {fetchRepository} from '../actions/home';
import Home from './Home';



/**
 *
 */
const mapStateToProps = property('home');

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
	fetchRepository(owner, name) {
		dispatch(fetchRepository(owner, name));
	}
});



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
