
import React from 'react';
import PropTypes from 'prop-types';
 
 
function Question(props) {
	return (
		<div>
			<p className="Quiz-header">
				{props.content}
			</p>
		</div>
		);
}
 
Question.propTypes = {
	content: PropTypes.string.isRequired
};
 
export default Question;