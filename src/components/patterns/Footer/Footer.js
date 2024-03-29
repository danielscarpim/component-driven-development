import React from 'react';
import Box from '../../primitives/Box';
import Flex from '../../primitives/Flex';
import Heading from '../../primitives/Heading';
import Link from '../../primitives/Link';
import Text from '../../primitives/Text';
import { Inverted } from '../../../ThemeProvider';
import SubscriptionForm from '../../app/SubscriptionFormContainer';
import SvgDogPees from '../../app/images/SvgDogPees';

const Footer = () => {
	return (
		<Inverted>
			<Flex
				px={5}
				py={4}
				flexDirection="column"
				bg="background"
				color="secondary"
			>
				<Box mx="auto" mb={5}>
					<SvgDogPees width="100" />
				</Box>
				<Box mb={5} mx="auto" width={[1, 2 / 3, 1 / 2]}>
					<Heading size="lg" as="h2" mb={4} textAlign="center">
						Subscribe to our newsletter!
					</Heading>
					<SubscriptionForm />
				</Box>
				<Text variant="tertiary" textAlign="center">
					© {new Date().getFullYear()}{' '}
					<Link href="https://okonet.ru/" shy>
						Andrey Okonetchnikov
					</Link>{' '}
					and{' '}
					<Link href="https://sapegin.me/" shy>
						Artem Sapegin
					</Link>
				</Text>
			</Flex>
		</Inverted>
	);
};

export default Footer;
