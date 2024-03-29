import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Grid from '../../components/primitives/Grid';

const Stack = styled(Grid)({
	// Your styles here
});

Stack.propTypes = {
	...Grid.propTypes,
	/** Number of columns */
	numColumns: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
