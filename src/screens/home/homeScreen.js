import React, { Component } from "react";
import { Content } from "native-base";
import WithContainer from '../../components/withContainer';
import { Text } from 'react-native'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  
  render() {
    return (
      <WithContainer enableHeader={true} gradient={true} >
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.text}>Home</Text>
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
export default Home;
