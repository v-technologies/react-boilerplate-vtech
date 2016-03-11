/**
 *
 */
export const FETCH_REPOSITORY = 'FETCH_REPOSITORY';
export const UPDATE_REPOSITORY = 'UPDATE_REPOSITORY';



/**
 *
 */
export const fetchRepository = (owner, name) => ({
	type: FETCH_REPOSITORY,
	payload: {
		owner,
		name
	}
});

/**
 *
 */
export const updateRepository = (repository) => ({
	type: UPDATE_REPOSITORY,
	payload: {
		repository
	}
});
