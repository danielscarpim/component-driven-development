A basic example:

```jsx harmony
import Heading from '../../components/primitives/Heading';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py={6}
>
  <Heading>The quick brown fox jumps over the lazy dog</Heading>
</Hero>;
```

Responsive paddings:

```jsx harmony
import Heading from '../../components/primitives/Heading';
<Hero
  backgroundImage="url(https://source.unsplash.com/TBw3iQGdwbg/1000x600)"
  py={[5, 6]}
>
  <Heading size="xl">
    The quick brown fox jumps over the lazy dog
  </Heading>
</Hero>;
```
