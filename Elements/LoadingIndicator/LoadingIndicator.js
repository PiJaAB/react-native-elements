// @flow
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import LoadingIndicatorStyles from './LoadingIndicatorStyles';

type Props = {
  loading: boolean,
  size?: "button" | "medium",
  nonBasic?: boolean,
  absolute?: boolean,
  centered?: boolean,
}

const getLoadingIndicatorSizeStyle = (size) => {
  switch (size) {
    case 'button': return LoadingIndicatorStyles.loadingIndicatorSizeButton;
    default: return null;
  }
};

class LoadingIndicator extends Component<Props> {
  static defaultProps: *;

  componentDidMount() {
    this.loadingIndicatorRotation();
  }

  loadingIndicatorRotationValue = new Animated.Value(0);

  loadingIndicatorRotation = () => {
    this.loadingIndicatorRotationValue.setValue(0);
    Animated.timing(
      this.loadingIndicatorRotationValue,
      {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
      },
    ).start(() => this.loadingIndicatorRotation());
  }

  render() {
    const {
      loading,
      size,
      nonBasic,
      absolute,
      centered,
    } = this.props;
    if (!loading) return null;

    const loadingIndicatorRotation = this.loadingIndicatorRotationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View
        style={[
          LoadingIndicatorStyles.loadingIndicator,
          getLoadingIndicatorSizeStyle(size),
          nonBasic && LoadingIndicatorStyles.loadingIndicatorNonBasic,
          absolute && LoadingIndicatorStyles.loadingIndicatorAbsolute,
          (!absolute && centered) && LoadingIndicatorStyles.loadingIndicatorCentered,
          { transform: [{ rotate: loadingIndicatorRotation }] },
        ]}
      />
    );
  }
}

LoadingIndicator.defaultProps = {
  size: 'medium',
  nonBasic: false,
  absolute: false,
  centered: false,
};

export default LoadingIndicator;
