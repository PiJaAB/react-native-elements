# react-native-elements

## Installation

### npm
`npm install --save @pija-ab/react-native-elements`

### yarn
`yarn add @pija-ab/react-native-elements`

## Forewords
This is a repostitory for themeing your react-native app and easily structure your project with simple building blocks.

## Getting started
To get started using this repostitory you need to configure a theme folder with the basic structure that you're going to be usign.

First of all you should make a folder structure that looks like something like this.

```
ProjectRoot
    └──theme
        ├── colors.js
        ├── dimensions.js
        ├── fontFiles.js
        ├── fonts.js
        └── index.js
```
Define your theme in the `index.js` file:

```js
import { Theme, font, type ThemeSpec, createStyleSheets } from '@pija-ab/react-native-elements';

import colors from './colors';
import dimensions from './dimensions';
import fonts from './fonts';
import getFontName from './fontFiles';

const themeSpec: ThemeSpec = {
  name: 'default',
  colors,
  dimensions,
  fonts,
  getFontName,
};
themeSpec.font = props => font(themeSpec, props);

const theme = new Theme(themeSpec);
theme.addStyleSheets(createStyleSheets(themeSpec));

export default theme;
```

`color.js` file should look something like this:

```js
export default {
  primary: '#3ac4a1',
  primaryLabel: '#ffffff',
  secondary: '#fceb49',
  secondaryLabel: '#2a3532',
  text: '#2a3532',
  secondaryText: '#999999',
  background: '#ffffff',
  secondaryBackground: '#f2f2f2',
  border: '#d9d9d9',
};
```

`dimensions.js` file should look something like this:

```js
export default {
  /** Core dimension parameter, controls the overall scale of Element components */
  baseSize: 20,
};
```

`fontFiles.js` file should look something like this:

```js
import fonts from './fonts';

const primaryFont = fonts.primary.fontFamily;
const primaryFont = fonts.primary.fontFamily;

const fontFiles = {
  [fonts.primary.fontFamily]: {
    '200': {
      normal: `${primaryFont}-ExtraLight`,
      italic: `${primaryFont}-ExtraLightItalic`,
    },
    '300': {
      normal: `${primaryFont}-Light`,
      italic: `${primaryFont}-LightItalic`,
    },
    '400': {
      normal: `${primaryFont}-Regular`,
      italic: `${primaryFont}-Italic`,
    },
    '500': {
      normal: `${primaryFont}-Medium`,
      italic: `${primaryFont}-MediumItalic`,
    },
    '600': {
      normal: `${primaryFont}-SemiBold`,
      italic: `${primaryFont}-SemiBoldItalic`,
    },
    '700': {
      normal: `${primaryFont}-Bold`,
      italic: `${primaryFont}-BoldItalic`,
    },
    '800': {
      normal: `${primaryFont}-ExtraBold`,
      italic: `${primaryFont}-ExtraBoldItalic`,
    },
    '900': {
      normal: `${primaryFont}-Black`,
      italic: `${primaryFont}-BlackItalic`,
    },
  },
};

export default (fontFamily, fontWeight, fontStyle) => fontFiles[fontFamily][fontWeight][fontStyle];
```

and `font.js` file should look something like this:

```js
import { Platform } from 'react-native';

export default {
  primary: {
    fontFamily: 'Verdana',
  },
  secondary: {
  },
};
```

After this has been done you should be good to go and use all of the building blocks in the theme.


## Basic building blocks:

#### Common props
Some common props that is available on all of the components

| Prop        | Description                   | Type     |
|-------------|-------------------------------|----------|
| `style`     | Basic inline style            | `object` |
| `className` | Sets class for your component | `string` |


* [Button](#button)
* [Container](#container)
* [Grid](#grid)
* [Divider](#divider)
* [Header](#header)
* [Link](#link)
* [Loader](#loader)
* [LoadingIndicator](#loadingIndicator)
* [Message](#message)
* [Paragraph](#paragraph)
* [FormInput](#formInput)
* [SceneContainer](#sceneContainer)

#### Button
| Prop        | Description                                                          | Type       |
|------------|----------------------------------------------------------------------|------------|
| `variant`   | String that should be one of the defined colors in the color.js file | `string`   |
| `onPress`   | Assigning button trigger                                             | `function` |
| `loading`   | Shows a loading indicator in the middle of the button                | `boolean`  |
| `disabled`  | Disables the button                                                  | `boolean`  |
| `textStyle` | Basic inline styling                                                 | `boolean`  |

Button can either take a `string`, one or multiple React components as a child.

```js
import { Button } from '@pija-ab/react-native-elements';
...
<Button
  variant="primary"
  onPress={() => console.log('button has been triggered')}
>
String
</Button>
...
```
```js
...
<Button
  variant="primary"
  onPress={() => console.log('button has been triggered')}
>
  <View>
    <Text>String</Text>
  </View>
</Button>
...
```
#### Container
| Prop                | Description                                                                         | Type      |
|---------------------|-------------------------------------------------------------------------------------|-----------|
| `scrollable`        | Makes it scrollable                                                                 | `boolean` |
| `keyboardAware`     | Automatically scrolls to focused area when keyboard appears                         | `boolean` |
| `verticallyAligned` | Grows the container component and aligns content inside the component in the center | `boolean` |

Basic usage of the Container component is wrapping the content in your components
```js
import { Container } from '@pija-ab/react-native-elements';
...
render(
  <Container>
    <Text>This is some content</Text>
  </Container>
);
```
Container also have a child component for making the content ignore the bounds of the container, such as menu items reaching the edges of the screen, or a header image ignoring the top-left-right margins. It can be used by having a `<Container.Fill>` component

```js
<Container>
  <Container.Fill>
    <Text>This content will ignore the bounds of the container component</Text>
  </Container.Fill>
</Container>
```

#### Grid
| Prop             | Description                                                                                        | Type     |
|------------------|----------------------------------------------------------------------------------------------------|----------|
| `size`           | Takes one of either `collapsed` `small` `medium` `large` `extraLarge`                              | `string` |
| `flexWrap`       | Takes one of either `wrap` `nowrap`                                                                | `string` |
| `alignItems`     | Takes one of either `flex-start` `flex-end` `center` `stretch` `baseline`                          | `string` |
| `alignContent`   | Takes one of either `flex-start` `flex-end` `center` `stretch` `space-between` `space-around`      | `string` |
| `justifyContent` | Takes one of either `flex-start` `flex-end` `center` `space-between` `space-around` `space-evenly` | `string` |

**Grid.Cell props**

| Prop         | Description                                                                                     | Type                 |
|--------------|-------------------------------------------------------------------------------------------------|----------------------|
| `size`       | Takes one of either `collapsed` `small` `medium` `large` `extraLarge`                           | `string`             |
| `column`     | Takes one of either `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `11` `12`                          | `number`             |
| `flexGrow`   | specifies how much of the remaining  space in the flex container should be assigned to the item | `number`             |
| `flexShrink` | If the size of all flex items is larger than the container items shrink to fit                  | `number`             |
| `flexBasis`  | Sets the initial main size of an item                                                           | `string` or `number` |
| `alignSelf`  | Takes one of either `auto` `flex-start` `flex-end` `center` `stretch` `baseline`                | `string`             |

Basic usage of the cell component is that you have 1 `<Grid>` wrapping the `<Grid.Cell>` components.

```js
import { Grid } from '@pija-ab/react-native-elements';
...
<Grid>
  <Grid.Cell>
    <Text>This is cell 1</Text>
  </Grid.Cell>
  <Grid.Cell>
    <Text>This is cell 2</Text>
  </Grid.Cell>
</Grid>
...
```

Using columns, full with of the container is 12.
```js
import { Grid } from '@pija-ab/react-native-elements';
...
<Grid>
  <Grid.Cell column={4}>
    <Text>This is cell 1</Text>
  </Grid.Cell>
  <Grid.Cell column={8}>
    <Text>This is cell 2</Text>
  </Grid.Cell>
</Grid>
...
```

#### Divider
| Prop       | Description                                                                                   | Type        |
|------------|-----------------------------------------------------------------------------------------------|-------------|
| `children` | Takes either a `Text` or `View` as a child and puts it's content in the center of the divider | `component` |
| `fitted`   | Removes the margin on the bottom and the top of the divider                                   | `boolean`   |

Basic usage of the devider:
```js
import { Divider } from '@pija-ab/react-native-elements';
...
<Divider />
...
```
```js
import { Divider } from '@pija-ab/react-native-elements';
...
<Divider fitted>
  <Text>This is some content</Text>
</Divider>
...
```

#### Header
| Prop           | Description                                       | Type      |
|----------------|---------------------------------------------------|-----------|
| `as`           | Takes one of either `h1` `h2` `h3` `h4` `h5` `h6` | `string`  |
| `sub`          | Creates a sub header                              | `boolean` |
| `inverted`     | Changes the color of the header                   | `boolean` |
| `marginBottom` | Adds margin under the header                      | `boolean` |
| `textAlign`    | Takes one of either `left` `center` `right`       | `string`  |

Basic usage:

```js
import { Header } from '@pija-ab/react-native-elements';
...
<Header
  as="h2"
  textAlign="center"
>
This is header 2
</Header>
<Header
  as="h2"
  textAlign="center"
  sub
  marginBottom
>
This is header 2 sub
</Header>
...

```
#### Link
| Prop              | Description                                           | Type       |
|-------------------|-------------------------------------------------------|------------|
| `onPress`         | Assigning link trigger                                | `function` |
| `loading`         | Shows a loading indicator in the middle of the button | `boolean`  |
| `disabled`        | Disables the link                                     | `boolean`  |
| `textAlign`       | Takes one of either `left` `center` `right`           | `string`   |
| `buttonUnderline` | If there should be an underline                       | `boolean`  |
| `underline`       | If there should be an underline                       | `boolean`  |

Basic usage of the `Link` component
```js
import { Link } from '@pija-ab/react-native-elements';

<Link onPress={console.log('trigger')} underline>Test Link</Link>
```
#### Loader
This is just a basic loader that should align in the middle of the contianing view.
```js
import { Loader } from '@pija-ab/react-native-elements';
...
<Loader />
...
```

#### LoadingIndicator
| Prop       | Description                                  | Type      |
|------------|----------------------------------------------|-----------|
| `Loading`  | Will be shown if loading is true             | `boolean` |
| `size`     | Should be either `button` or `medium`        | `string`  |
| `nonBasic` | Will show another color scheme of the loader | `boolean` |
| `absolute` | Makes the loader absolute positioned         | `boolean` |
| `centered` | Centers the loader in it's current container | `boolean` |

Basic usage:
```js
import { LoadingIndicator } from '@pija-ab/react-native-elements';
...
<LoadingIndicator loading nonBasic centered />
...
```

#### Message
| Prop      | Description               | Type     |
|-----------|---------------------------|----------|
| `variant` | Should be `error` or null | `string` |

Some basic usage of the error
```js
import { Message } from '@pija-ab/react-native-elements';
...
<Message variant="error">
  Error message
</Message>
...
```

#### Paragrah
| Prop            | Description                                    | Type      |
|-----------------|------------------------------------------------|-----------|
| `textAlign`     | Takes one of either `left` `center` `right`    | `string`  |
| `paddingBefore` | If it should have padding before the paragraph | `boolean` |
| `paddingAfter`  | If it should have padding after the paragraph  | `boolean` |

```js
import { Message } from '@pija-ab/react-native-elements';
...
<Paragraph>
 This is some paragraph text
</Paragraph>
...
```

#### FormInput
TODO: Document FormInput.

#### SceneContainer
Depricated. Use `<Container className="scene">` instead.
