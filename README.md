# Emotion Tech Sample

This is a _Technology Sample_ you can rely on to build your own Design System, based on React and a [Emotion](https://emotion.sh/docs/theming).

**Disclaimer**: _Technology Samples_ aren't comprehensive _Design Systems_ but showcases a given technology so you free to build you own solution upon it.

## Architecture

This _tech sample_ uses [React](https://reactjs.org/) and [JSX](https://reactjs.org/docs/introducing-jsx.html) to implement its components with [TypeScript](https://www.typescriptlang.org/).
The Tokens are following the [Styled components theme](https://styled-components.com/docs/advanced#theming)

### Tokens

The Tokens are separated in different components:

- `typography`: fonts definitions
- `colors`: colors and variants
- `space`: relative and absolute spaces
- `sizes`: screensize breakpoints
- `shadows`: inset and outset shadows
- `radii`: border radius
- `border`: borders definitions
- `z-index`: z-axe indices

The [Emotion theme](https://styled-components.com/docs/advanced#theming) allows you to define scales (like `font-sizes`, `radius`, _etc_) in arrays. You can also refer to previously declared values as _aliases_.

Your `tokens` should be organized by following the _key reference_ in the specification:

| Theme Key      | CSS Properties                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| space          | margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap |
| fontSizes      | font-size                                                                                                                                                                |
| colors         | color, background-color, border-color                                                                                                                                    |
| fonts          | font-family                                                                                                                                                              |
| fontWeights    | font-weight                                                                                                                                                              |
| lineHeights    | line-height                                                                                                                                                              |
| letterSpacings | letter-spacing                                                                                                                                                           |
| sizes          | width, height, min-width, max-width, min-height, max-height                                                                                                              |
| borders        | border, border-top, border-right, border-bottom, border-left                                                                                                             |
| borderWidths   | border-width                                                                                                                                                             |
| borderStyles   | border-style                                                                                                                                                             |
| radii          | border-radius                                                                                                                                                            |
| shadows        | box-shadow, text-shadow                                                                                                                                                  |
| zIndices       | z-index                                                                                                                                                                  |
| transitions    | transition                                                                                                                                                               |

All tokens are declared in dedicated `*.ts` files in each tokens' components. They're then all exposed by the `all/index.ts` component file in a `theme` constant.

Your theme tokens can be imported anywhere with

```ts
import { theme } from '../../all';
```

## Components

This _tech sample_ exposes react emotion components. They all use the same theme tokens imported as above, so your React components and your theme are not hard-linked together, and you can rely on the theme abstraction you're the most comfortable with.

[Emotion](https://emotion.sh) exposes a `<ThemeProvider />` JSX wrapper that take as theme argument a system-ui theme tokens definition:

```jsx
<ThemeProvider theme={theme}>
  <!-- Your component(s) here -->
</ThemeProvider>
```

To avoid the need of loading the `<ThemeProvider />` decorator in each components, we have overridden the _stories_ and _doc_ layouts in the `layout` component.

```jsx
export const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <MdxLayout {...props} />
  </ThemeProvider>
);
```

### Emotion components

_emotion_ doesn't declares variations at theme level, but let you customize your components' styles directly by using the theme definitions:

```jsx
import styled from '@emotion/styled';

const StyledButton = styled.button(
  ({ theme, primary = true, secondary, disabled = false, loading = false }) => {
    return {
      'font-size': theme.fontSizes[2],
      padding: `${theme.space[2]} ${theme.space[3]}`,
    };
  }
);

export const Button = () => <StyledButton />;
```

### Creating a _styled-components_ component

To add new _emotion-components_ component, create a component that import the _emotion-components_ core utils:

```jsx
import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export const MyComponent = () => {
  const theme = useTheme();

  return (
    // Your component here
  );
};
```

## Stories

Stories are written in Storybook's [Component Story Format](https://backlight.dev/docs/component-story-format).

You can defined multiple stories for your components to visualize their variations:

```jsx
import { Button } from '../index';

export const primary = () => <Button variant="primary">Primary</Button>;
export const secondary = () => <Button variant="secondary">Secondary</Button>;
export const disabled = () => <Button disabled>Disabled</Button>;
export const secondary_disabled = () => (
  <Button variant="secondary" disabled>
    Disabled
  </Button>
);
```

Stories for the components are located in their `stories/` folder.

## Documentation

Documentation pages are decorated by a React layout using the [@divriots/dockit-react](https://github.com/divriots/dockit-react) helpers. See the `layout` component.

### Pages

Each component embed its own documentation in its `doc/` folder. You can use any web format for your documentation but we recommend you to write it with the [mdx](https://backlight.dev/docs/mdx) format, allowing you to embed your components live in the documentation.

---

## Links

- [Emotion](https://emotion.sh/)
