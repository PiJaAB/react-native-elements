// @flow
import React from 'react';
import type { Node } from 'react';
import compose from '../../Theme/utilities/compose';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Theme, withTheme } from '../../Theme';
import withStatics from '../../Theme/utilities/withStatics';

type FillProps = {
  children: Node,
  className?: string | string[],
  theme: Theme,
  firstChild?: boolean,
  lastChild?: boolean,
  style?: mixed,
}

function Fill({
  children, theme, firstChild, lastChild, style, className, ...rest
}: FillProps) {
  return (
    <View
      style={[
        theme.getStyles('Elements.SceneContainer.fill', className),
        firstChild && theme.getStyles('Elements.SceneContainer.fillFirstChild', className),
        lastChild && theme.getStyles('Elements.SceneContainer.fillLastChild', className),
        style,
      ]}
      {...rest}
    >
      { children }
    </View>
  );
}

Fill.defaultProps = {
  firstChild: false,
  lastChild: false,
  style: undefined,
  className: null,
};

type Props = {
  children?: Node,
  /**
   * Whether this Container's content should be scrollable or not.  Default:
   * automatic depending on whether content fits inside the Container.
   */
  scrollable?: boolean,
  keyboardAware?: boolean,
  verticallyAligned?: boolean,
  style?: mixed,
  className?: string | string[],
  theme: Theme,
}

function Container({
  children,
  scrollable,
  keyboardAware,
  verticallyAligned,
  style,
  theme,
  className,
  safeAreaProps = {},
  ...rest
}: Props) {
  const containerStylesList = [
    theme.getStyles('Elements.SceneContainer.base', className),
    verticallyAligned && { flexGrow: 1, justifyContent: 'center' },
    style,
  ];

  // Transform child Container.Fill's
  const childrenCount = React.Children.count(children);
  const getFillProps = index => ({
    theme,
    firstChild: index === 0,
    lastChild: index === childrenCount - 1,
  });
  const transformedChildren = React.Children.map(children, (child, i) =>
    (child.type === Fill ? React.cloneElement(child, getFillProps(i)) : child));

  // Render as appropriate (as View, ScrollView, or KeyboardAwareScrollView)
  const scrollViewProps = {
    style: theme.getStyles('Elements.SceneContainer.baseScroll', className),
    contentContainerStyle: containerStylesList,
    alwaysBounceVertical: (scrollable === true),
  };

  if (scrollable === false) {
    return (
      <SafeAreaView style={{ flex: 1 }} {...safeAreaProps} >
        <View style={containerStylesList} {...rest}>
          {
            transformedChildren
          }
        </View>
      </SafeAreaView>
    );
  }

  if (!keyboardAware) {
    return (
      <SafeAreaView style={{ flex: 1 }} {...safeAreaProps} >
        <ScrollView {...scrollViewProps} {...rest}>
          {
            transformedChildren
          }
        </ScrollView>
      </SafeAreaView>
    );
  }

  const keyboardAwareScrollViewProps = {
    ...scrollViewProps,
    enableOnAndroid: true,
    keyboardShouldPersistTaps: 'handled',
    ...rest,
  };
  return (
    <SafeAreaView style={{ flex: 1 }} {...safeAreaProps} >
      <KeyboardAwareScrollView {...keyboardAwareScrollViewProps}>
        {
          transformedChildren
        }
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

Container.defaultProps = {
  scrollable: undefined,
  keyboardAware: false,
  verticallyAligned: false,
  style: null,
  children: null,
  className: null,
};

export default compose(
  withStatics({
    Fill,
  }),
  withTheme,
)(Container);
