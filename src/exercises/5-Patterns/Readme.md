## 5.1 Using layout and basic primitive to compose UI patterns

In the previous exercise we learned how to manage whitespace around our primitives. Now it's time to use what we learned and create an application specific component.

### The result

```jsx noeditor
import SubscriptionForm from '../../../src/components/patterns/SubscriptionForm';

<SubscriptionForm
  id="sf1"
  email=""
  onSubmit={() => {}}
  onEmailChange={() => {}}
/>;
```

### The task

1. Create a `SubscriptionForm` component using the `Grid` component.
2. The layout should be responsive and the button should be placed below the input field on a narrow screen.

**Hint:** Use `grid-template-columns` CSS property for responsiveness, like this: `gridTemplateColumns={['1fr', '1fr auto']}`.

<details>
 <summary>Solution</summary>

```js {"file": "solutions/5.1.js", "static": true}
```

</details>

## 5.2 Creating a new page using primitives

Using `Box` and `Flex` components we can create really complex layouts without writing custom CSS. And since the values for the spacing are coming from our [spacing scale](https://cdds.netlify.com/styleguide/#/Foundation?id=spacing) we can be sure our layouts are consistent across the whole application.

We can even create full pages. Let’s try to create a new login page four our app.

### The result

```jsx noeditor
import Box from '../../components/primitives/Box';
import Flex from '../../components/primitives/Flex';
import Heading from '../../components/primitives/Heading';
import Button from '../../components/primitives/Button';
import Link from '../../components/primitives/Link';
import Text from '../../components/primitives/Text';
import Input from '../../components/primitives/Input';

<form>
  <Heading mb={4}>Login</Heading>
  <Text as="label" display="block" mb={3}>
    <Box mb={2}>Username</Box>
    <Input type="text" />
  </Text>
  <Text as="label" display="block" mb={4}>
    <Box mb={2}>Password</Box>
    <Input type="password" />
  </Text>
  <Box mb={4}>
    <Link href="#">Forgot your password?</Link>
  </Box>
  <Button>Log in</Button>
</form>;
```

### The task

1. Create a `LoginPage` component.

2. Use only primitives for layout, whitespace (`Box`, `Flex`, `Grid`, and `Stack`) and text (`Text`, `Heading` and `Link`).

<details>
 <summary>Solution</summary>

```js {"file": "solutions/5.2.js", "static": true}
```

</details>
