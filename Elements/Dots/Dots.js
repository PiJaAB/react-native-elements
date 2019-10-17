// @flow
import React from 'react';
import { FlatList, View } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';
import styles from './styles';

type Props = {
  position: number,
  pages: {}[],
};

type DotProps = {
  position: number,
  index: number,
};

const Dot = ({ position, index }: DotProps) => (
  <View style={[styles.dot, position === index && styles.active]} />
);

const Dots = (props: Props) => {
  const { pages, position } = props;
  return (
    <FlatList
      data={pages}
      extraData={props}
      renderItem={item => <Dot position={position} index={item.index} />}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Dots;
