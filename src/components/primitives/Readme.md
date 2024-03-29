Primitives are building blocks of your application. Since primitives can be used anywhere in the UI they should be agnostic of their environment.

This means primitives:

- should define whitespace around them
- should not define width and height
- should not expect to be inside a Flexbox or absolutely positioned container
- should not make any assumptions on the HTML element
- should provide a `ref` prop that is mapped to the underlying DOM node

Primitives are meant to be composed into [UI patterns](/patterns).
