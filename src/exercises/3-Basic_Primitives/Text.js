import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, fontSize } from 'styled-system';
/**
 * A component to render all text in the app.
 */
const Text = styled.p(props => ({
	// default value
	fontFamily:  props.theme.fonts.body
}), color, typography, fontSize);

Text.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Text;
