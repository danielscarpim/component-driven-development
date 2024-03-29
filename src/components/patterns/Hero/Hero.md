A basic example:

```jsx harmony
import Heading from '../../primitives/Heading';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py={6}
>
  <Heading>The quick brown fox jumps over the lazy dog</Heading>
</Hero>;
```

Responsive paddings:

```jsx harmony
import Heading from '../../primitives/Heading';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py={[5, 6]}
>
  <Heading size="xl">
    The quick brown fox jumps over the lazy dog
  </Heading>
</Hero>;
```

Inverted theme:

```jsx harmony
import Stack from 'stack-styled';
import Heading from '../../primitives/Heading';
import Button from '../../primitives/Button';
import { Inverted } from '../../../ThemeProvider';
<Inverted>
  <Hero
    backgroundImage="url(https://source.unsplash.com/cGlac7MEyiE/1000x600)"
    py={5}
  >
    <Heading size="xl" mb={5}>
      The quick black fox jumps over the lazy dog
    </Heading>
    <Stack justifyContent="center" gridAutoFlow="column" gridGap={4}>
      <Button variant="primary">Try now</Button>
      <Button variant="secondary">Try later</Button>
    </Stack>
  </Hero>
</Inverted>;
```

Using as a page heading:

```jsx harmony
import Stack from 'stack-styled';
import Box from '../../primitives/Box';
import Flex from '../../primitives/Flex';
import Heading from '../../primitives/Heading';
import Link from '../../primitives/Link';
import Button from '../../primitives/Button';
import Text from '../../primitives/Text';
import { Inverted } from '../../../ThemeProvider';
<Inverted>
  <Hero backgroundImage="url(https://source.unsplash.com/cGlac7MEyiE/1000x600)">
    <Flex
      justifyContent={['center', 'space-between']}
      flexWrap="wrap"
    >
      <Box width={[1, 'auto']} mb={2}>
        <Text as="h1">
          <Link href="/">Rent-o-dog</Link>
        </Text>
      </Box>
      <Stack
        justifyContent="center"
        gridAutoFlow="column"
        gridGap={4}
        mb={2}
      >
        <Text>
          <Link href="/">Our dogs</Link>
        </Text>
        <Text>
          <Link href="/">How it works</Link>
        </Text>
        <Text>
          <Link href="/">Contact us</Link>
        </Text>
      </Stack>
    </Flex>
    <Box py={6}>
      <Heading size="xl" mb={5}>
        The quick black fox jumps over the lazy dog
      </Heading>
      <Stack
        justifyContent="center"
        gridAutoFlow="column"
        gridGap={4}
      >
        <Button variant="primary">Try now</Button>
        <Button variant="secondary">Try later</Button>
      </Stack>
    </Box>
  </Hero>
</Inverted>;
```
