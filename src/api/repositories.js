import {PropTypes} from 'react';



/**
 *
 */
export const repositoryShape = PropTypes.shape({
	name: PropTypes.string,
	description: PropTypes.string
});



/**
 *
 */
export function fetchOne(owner, name) {
	return fetch(`https://api.github.com/repos/${owner}/${name}`)
		.then((response) => response.json());
}
