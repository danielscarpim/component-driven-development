/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Grid from '../../../../src/components/primitives/Grid';
import Button from '../../../../src/components/primitives/Button';
import Input from '../../../../src/components/primitives/Input';

const SubscriptionForm = ({
	id,
	onSubmit,
	onEmailChange,
	email,
	loading,
	success,
	error,
}) => (
	<Grid
		gridGap={3}
		mb={2}
		gridTemplateColumns={['1fr', '1fr auto']}
		as="form"
		onSubmit={onSubmit}
	>
		<Input
			type="email"
			value={email}
			required
			placeholder="Email"
			aria-label="Email"
			aria-invalid={error && 'true'}
			aria-describedby={`${id}-info`}
			disabled={loading}
			onChange={onEmailChange}
		/>
		<Button variant="primary" type="submit" disabled={loading}>
			Subscribe
		</Button>
	</Grid>
);

export default SubscriptionForm;
