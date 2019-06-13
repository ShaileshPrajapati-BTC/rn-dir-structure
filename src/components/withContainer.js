import React, { Component } from "react";
import { Container } from "native-base";
import AppHeader from './header';

export class WithContainer extends Component {
  render() {
    const { enableHeader, children, gradient, header } = this.props;
    return (
      <Container>
          {!enableHeader || <AppHeader transparent={gradient} header={header || {}} />}
          {children}
      </Container>
    );
  }
}

export default WithContainer;
