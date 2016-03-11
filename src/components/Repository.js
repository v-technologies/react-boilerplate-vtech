import React from 'react';
import {repositoryShape} from '../api/repositories';



/**
 *
 */
export default function Repository({repository}) {
	return (
		<article className="repository">
			<header className="repository-header">
				<h1 className="repository-name">
					{repository.name}
				</h1>
			</header>

			<p className="repository-description">
				{repository.description}
			</p>
		</article>
	);
}

Repository.propTypes = {
	repository: repositoryShape
};
