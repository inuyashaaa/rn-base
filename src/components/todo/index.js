import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

class ToDoScreen extends React.PureComponent {
  handleBackToHomeScreen = () => {
    const { componentId } = this.props;

    Navigation.pop(componentId);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Todo screen</Text>
        <TouchableOpacity onPress={this.handleBackToHomeScreen}>
          <Text>Back To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default ToDoScreen;
