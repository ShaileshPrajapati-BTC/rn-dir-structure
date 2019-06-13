import React, { Component } from "react";
import { Content } from "native-base";
import { NavigationActions, StackActions } from "react-navigation";
import WithContainer from '../../components/withContainer';
import { Text } from 'react-native'

const resetAction = (routeName) => StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: routeName,
      params: {}
    })
  ]
});

export class Splash extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  componentDidMount() {
    this.animate()
    setTimeout(() => {
      this.props.navigation.dispatch(resetAction("HomeScreen"));
    }, 2000)
  }
  render() {
    return (
      <WithContainer enableHeader={true} gradient={true} >
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.text}>Splash</Text>
        </Content>
      </WithContainer>
    );
  }
}

const styles = {
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
}
export default Splash;
