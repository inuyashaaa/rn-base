import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

class HomeScreen extends React.PureComponent {
  handleGoToDoScreen = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: {
        name: 'TodoScreen',
      },
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <TouchableOpacity onPress={this.handleGoToDoScreen}>
          <Text>Go Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;
