
import React from 'react';
import { View } from 'react-native';

const SectionItem = (props) => {
  const { children, style } = props;
  return (
    <View style={ style }>
      { children }
    </View>
  );
};

export { SectionItem };
