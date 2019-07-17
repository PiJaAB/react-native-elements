// @flow
import React from 'react';
import type { Node } from 'react';
import { Text } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';
import withStatics from '../../Theme/utilities/withStatics';

/** A group of Paragraphs, with paragraph spacing in-between them */
const Group = ({ children }: { children: Node }) => (
  // $FlowFixMe: fixed in Flow 0.71
  <React.Fragment>
    { React.Children.map(children, (child, i) =>
        (i > 0 ? React.cloneElement(child, { paddingBefore: true }) : child)) }
  </React.Fragment>
);

type Props = {
  children: mixed,
  textAlign?: "left" | "center" | "right",
  paddingBefore?: boolean,
  paddingAfter?: boolean,
  style?: mixed,
  className?: string | string[],
  theme: Theme,
}

function Paragraph({
  children, textAlign, paddingBefore, paddingAfter, style, className, theme, ...rest
}: Props) {
  return (
    <Text
      style={[
        theme.getStyles('Elements.Paragraph.paragraph', className),
        paddingBefore && theme.getStyles('Elements.Paragraph.paddingBefore', className),
        paddingAfter && theme.getStyles('Elements.Paragraph.paddingAfter', className),
        textAlign && { textAlign },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

Paragraph.defaultProps = {
  textAlign: '',
  paddingBefore: false,
  paddingAfter: false,
  style: {},
  className: null,
};

export default compose(
  withStatics({
    Group,
  }),
  withTheme,
)(Paragraph);
