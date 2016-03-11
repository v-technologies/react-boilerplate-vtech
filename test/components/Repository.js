import React from 'react';
import {mount} from 'enzyme';
import Repository from '../../src/components/Repository';



/**
 *
 */
describe('Repository', function() {

	/**
	 *
	 */
	it('should render name and description', function() {
		const name = 'name';
		const description = 'description';
		const wrapper = mount(
			<Repository repository={{name, description}} />
		);

		expect(wrapper.find('.repository-name').text()).to.equal(name);
		expect(wrapper.find('.repository-description').text()).to.equal(description);
	});
});
